uniform float uTime;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vMatcapUv;


vec3 flowPath(vec3 pos, float time) {
    float amplitude = 0.02;
    float frequency = 2.0;
    float speed = 1.0;
    
    // spiral pattern
    float spiral = sin(pos.y * frequency + time * speed) * cos(pos.x * frequency + time * speed);
    
    // wave pattern
    float wave = sin(pos.x * frequency + pos.z * frequency + time * speed);
    
    // spiral & spiral 써도 ㄱㅊ
    pos.x += spiral * amplitude;
    pos.y += wave * amplitude;
    
    return pos;
}

void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    
    // matcap UVs
    vec3 viewNormal = normalize(normalMatrix * normal);
    vec3 viewPosition = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
    vec2 matcapUv = viewNormal.xy * 0.5 + 0.5;
    vec3 flowedPosition = flowPath(position, uTime);
    
    vMatcapUv = matcapUv + vec2(sin(uTime * 0.5) * 0.1, cos(uTime * 0.5) * 0.1);
    
    vec4 modelPosition = modelMatrix * vec4(flowedPosition, 1.0);
    vec4 viewPos = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPos;
    
    gl_Position = projectedPosition;
}