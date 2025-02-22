uniform sampler2D matcapTexture;
uniform float uTime;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vMatcapUv;

// Voronoi F1 function
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

float voronoiF1(vec2 x) {
    vec2 n = floor(x);
    vec2 f = fract(x);

    float f1 = 8.0;
    
    for(int j=-1; j<=1; j++) {
        for(int i=-1; i<=1; i++) {
            vec2 g = vec2(float(i),float(j));
            vec2 o = random2(n + g);
            o = 0.5 + 0.5*sin(uTime + 6.2831*o);
            
            float d = distance(g + o, f);
            f1 = min(f1, d);
        }
    }
    
    return f1;
}

void main() {
    vec3 matcapColor = texture2D(matcapTexture, vMatcapUv).rgb;
    
    vec3 finalColor = matcapColor;
    float alpha = 0.9;
    
    gl_FragColor = vec4(finalColor, alpha);
}