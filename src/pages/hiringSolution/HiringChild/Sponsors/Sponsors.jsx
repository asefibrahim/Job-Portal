import React from "react";

const Sponsors = () => {
  return (
    <div>
      <h1 className="text-xl text-gray-700 my-8 text-center">
        TRUSTED BY LEADING RUST COMPANIES
      </h1>

      <div className="md:flex  px-8 w-full mx-auto  items-center justify-between mb-7">
        <img
          className="w-40"
          src="https://rustjobs.dev/static/paidy-06bd871c6441f283df43669d1ee30e8e.png"
          alt=""
        />

        <div>
          <img
            className="w-40 "
            src="https://rustjobs.dev/static/stockly-3b4a86373abcae70166574ce22934820.jpeg"
            alt=""
          />
        </div>
        <img
          className="w-40"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABfCAYAAADGdpEZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQTExRTE3QUZCOUQxMUU2QjBDREIxQzk5RjZEOUY0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQTExRTE3QkZCOUQxMUU2QjBDREIxQzk5RjZEOUY0MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVBMTFFMTc4RkI5RDExRTZCMENEQjFDOTlGNkQ5RjQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVBMTFFMTc5RkI5RDExRTZCMENEQjFDOTlGNkQ5RjQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3YCDbAAAGkRJREFUeNrsXd1R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"
          alt=""
        />

        <img
          className="w-40"
          src="https://rustjobs.dev/static/paidy-06bd871c6441f283df43669d1ee30e8e.png"
          alt=""
        />
        <img
          className="w-40"
          src="https://rustjobs.dev/static/stockly-3b4a86373abcae70166574ce22934820.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Sponsors;
