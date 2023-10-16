import React from "react";

export default function ThirdwebGuideFooter() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #fa00ff",
          cursor: "pointer",
        }}
        role="button"
        onClick={() =>
          window.open(
            "https://www.dominotoysnft.com/",
            "_blank"
          )
        }
      />

      <div
        style={{
          position: "absolute",
          bottom: 14,
          right: 18
        }}
      >
        <img
          src="/dominoimg2c.avif"
          width={40}
          height={40}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://www.dominotoysnft.com/",
              "_blank"
            )
          }
        />
      </div>
    </>
  );
}
