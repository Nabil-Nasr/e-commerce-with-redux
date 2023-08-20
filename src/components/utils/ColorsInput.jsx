import { useState } from "react";
import { TwitterPicker } from "react-color";

const colors = [
  '#000000', '#0062B1', '#009CE0', '#0C797D', '#16A5A5', '#417505', '#4A4A4A', '#4A90E2', '#50E3C2', '#653294', '#68BC00', '#68CCCA', '#73D8FF', '#7B64FF', '#7ED321', '#808900', '#8B572A', '#9013FE', '#999999', '#9F0500', '#A4DD00', '#AEA1FF', '#B0BC00', '#B3B3B3', '#B8E986', '#BD10E0', '#D33115', '#E27300', '#F44E3B', '#F5A623', '#F8E71C', '#FA28FF', '#FB9E00', '#FCC400', '#FCDC00', '#FDA1FF', '#FE9200', '#FF0000', '#FFC0CB', '#FFFF00', '#FFFFFF', '#CCCCCC',
];


const ColorsInput = ({ name, maxColors = colors.length }) => {
	const [colorsSet, setColorsSet] = useState(new Set());
	const [showColorsPicker, setShowColorsPicker] = useState(false);

	const canAddColors =
		colorsSet.size <
		(maxColors > colors.length ? colors.length : maxColors);
	return (
		<div className="d-flex gap-2 mt-1 position-relative flex-wrap">
			{[...colorsSet.keys()].map(color => (
				<div
					key={color}
					style={{ backgroundColor: color }}
					onClick={() => {
						setColorsSet(prevColorsSet => {
							prevColorsSet.delete(color);
							return new Set(prevColorsSet);
						});
					}}
					className="border p-3 rounded-circle"
					role="button">
					<input
						type="color"
						hidden
						name={name}
						value={color}
						readOnly
					/>
				</div>
			))}
			{canAddColors && (
				<div
					onClick={() => {
						setShowColorsPicker(
							prevShowColorsPicker => !prevShowColorsPicker
						);
					}}
					className="border p-3 rounded-circle position-relative"
					role="button">
						<i className={`position-absolute  translate-middle far fa-${showColorsPicker?"rectangle-xmark text-danger":"plus text-success"}`}></i>
				</div>
			)}

			{showColorsPicker && canAddColors && (
				<div className="position-absolute bottom-100 start-0 rounded-0 mb-1 ms-5">
					<TwitterPicker
						triangle="hide"
						onChangeComplete={color => {
							setColorsSet(prevColorsSet => {
								const beforeAddSize = prevColorsSet.size;
								prevColorsSet.add(color.hex);
								if (beforeAddSize === prevColorsSet.size) {
									return prevColorsSet;
								}
								return new Set(prevColorsSet);
							});
						}}
						colors={colors}
						styles={{
							default: {
								input: { display: "none" },
								hash: { display: "none" },
								swatch: {
									borderRadius: 0,
									outline: "1px solid var(--bs-border-color)",
								},
								card: { borderRadius: 0 },
							},
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default ColorsInput;
