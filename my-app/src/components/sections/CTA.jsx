
import React from "react";

const CTA = () => {
  return (
    <section className="md:px-8 md:pt-18 pt-24 md:pb-36 pb-24 mx-auto flex items-center flex-col justify-between">
      
      <div className="
        flex flex-wrap justify-center
        md:grid md:grid-cols-3 md:grid-rows-2
        md:gap-y-7 gap-2
        md:max-w-5xl w-full
        items-center
      ">

        {/* LOGO 1 — ANTHROPIC (SAME SVG) */}
        <div
          className="md:h-16 h-10 flex items-center justify-center max-md:w-[120px] md:w-auto"
          aria-label="Anthropic"
          role="img"
          title="Anthropic"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="20"
            viewBox="0 0 126 15"
            fill="none"
            className="max-md:h-[10px]"
          >
            <g clipPath="url(#clip0)">
              <path d="M25.9509 9.87536L19.8609 0.399979H16.5742V13.9362H19.3776V4.46086L25.4676 13.9362H28.7542V0.399979H25.9509V9.87536Z" fill="var(--color-text-main)" />
              <path d="M31.0742 3.01054H35.6179V13.9362H38.5181V3.01054H43.0617V0.399979H31.0742V3.01054Z" fill="var(--color-text-main)" />
             
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="125.125" height="14" fill="white" transform="translate(0.5625 0.163651)" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* LOGO 2 — COGNITION (SAME SVG) */}
        <div
          className="md:h-16 h-10 flex items-center justify-center max-md:w-[120px] md:w-auto"
          aria-label="Cognition"
          role="img"
          title="Cognition"
        >
          <svg
            width="160"
            height="38"
            viewBox="0 0 160 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-md:h-[17px]"
          >
            <path d="M51.8321 28.984C49.9351 28.984 48.2901 28.563 46.8941 27.714..." fill="var(--color-text-main)" />
           
          </svg>
        </div>

        {/* LOGO 3 */}
        <div className="md:h-16 h-10 flex items-center justify-center max-md:w-[120px]">
        
        </div>

        {/* LOGO 4 */}
        <div className="md:h-16 h-10 flex items-center justify-center max-md:w-[120px]">
        
        </div>

        {/* LOGO 5 */}
        <div className="md:h-16 h-10 flex items-center justify-center max-md:w-[120px]">
         
        </div>

        {/* LOGO 6 */}
        <div className="md:h-16 h-10 flex items-center justify-center max-md:w-[120px]">
    
        </div>

      </div>
    </section>
  );
};

export default CTA;
