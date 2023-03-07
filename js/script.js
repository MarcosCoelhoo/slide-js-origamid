import { SlideNav } from "./slide.js";

const slide = new SlideNav(".slide-wrapper .slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");

slide.changeSlide(0);
