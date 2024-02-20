import React from 'react';
import './line-chart.css';


interface LineChartProps {
	array: number[],
	color: string,
	height: number,
	width: number,
}

export const LineChart: React.FC<LineChartProps> = ({array, height, width, color}) => {
	const renderYArray = (array ?? [])
	const renderXArray = renderYArray.map((_, index) => index);

	const getMinY = (): number => {
		const mapFn = renderYArray.map(item => item)
		return Math.min.apply(null, mapFn);
	}

	const getMaxY = (): number => {
		const mapFn = renderYArray.map(item => item)
		return Math.max.apply(null, mapFn);
	}

	const getMaxX = (): number => {
		const mapFn = renderXArray.map(item => item)
		return Math.max.apply(null, mapFn);
	}

	const getSvgX = (x: number) => {
		return (x / getMaxX() * width);
	}

	const getSvgY = (y: number) => {
		return height - (y / getMaxY() * height);
	}

	const getPath = () => {
		let pathD = ` M  ${getSvgX(renderXArray[0])} ${getSvgY(renderYArray[0])} `

		pathD += renderYArray.map((y: number, i: any) => {
			return `L ${getSvgX(renderXArray[i])} ${getSvgY(y)}  `
		})

		return (
			<path className="linechart_path" d={pathD} style={{ stroke: color }} />
		)
	}

/*	const getAxis = () => {
		const minX = 0
		const maxX = getMaxX()
		const minY = getMinY()
		const maxY = getMaxY()

		return (
			<g className="linechart_axis">
				<line
					x1={getSvgX(minX)}
					y1={getSvgY(minY)}
					x2={getSvgX(maxX)}
					y2={getSvgY(minY)}
				/>
				<line
					x1={getSvgX(minX)}
					y1={getSvgY(minY)}
					x2={getSvgX(minX)}
					y2={getSvgY(maxY)}
				/>
			</g>
		)
	}*/


	return <>
		<svg viewBox={`0 0 ${width} ${height}`}>
			{getPath()}
			{/*{getAxis()}*/}
		</svg>
	</>
}
