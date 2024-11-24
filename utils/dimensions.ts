import { dimensions } from "@/constants";

const { ww, wh, diameter } = dimensions;

const scaleByHeight = (fraction: number): number => wh * fraction;
const scaleByWidth = (fraction: number): number => ww * fraction;
const scaleByDiameter = (fraction: number): number => diameter * fraction;

export { scaleByHeight, scaleByWidth, scaleByDiameter };
