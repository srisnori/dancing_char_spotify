export default function DancingCharacter({ tempo, energy }) {
    const style = {
      animation: `dance ${Math.max(1, 200 - tempo)}ms infinite`,
      transform: `scale(${1 + energy / 2})`,
      fontSize: "5rem",
    };
  
    return (
      <div style={style}>
        💃 {/* Placeholder - can be replaced with an SVG or animated GIF later */}
      </div>
    );
  }  