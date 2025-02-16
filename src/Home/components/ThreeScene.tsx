import Spline from "@splinetool/react-spline";

const ThreeScene = () => {
  return (
    <div className="w-full h-screen">
      <Spline
        scene="https://prod.spline.design/rOrm2xnrAP5TZMP3/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ThreeScene;
