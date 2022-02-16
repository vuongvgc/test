import { useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const mainContent: any = useRef();
  const scrollBox: any = useRef();
  const scrollContent: any = useRef();
  const scale = (
    num: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
  ) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  useEffect(() => {
    const domMainContent = mainContent.current.getBoundingClientRect();
    const domScrollBox = scrollBox.current.getBoundingClientRect();
    mainContent.current.addEventListener("scroll", () => {
      const scrollTopMainContent = mainContent.current.scrollTop;
      const scrollHeightScrollItem = scrollContent.current.scrollHeight;
      const scrollHeightMainContent = mainContent.current.scrollHeight;
      const heightContent =
        (scrollHeightMainContent * domScrollBox.height) / domMainContent.height;
      scrollContent.current.style.height = `${heightContent}px`;
      const height = scale(
        scrollTopMainContent,
        0,
        scrollHeightMainContent,
        0,
        scrollHeightScrollItem
      );
      scrollBox.current.scrollTop = height;
    });
  }, []);

  return (
    <div className="main-card">
      <div className="scroll-box" ref={scrollBox}>
        <div className="scroll-content" ref={scrollContent}></div>
      </div>
      <div className="App" ref={mainContent}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>{" "}
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>{" "}
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}
