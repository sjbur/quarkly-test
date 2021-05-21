import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Button, Box } from "@quarkly/widgets";
const defaultProps = {
	"background": "#F3F6FA",
	"border-radius": "30px",
	"padding": "20px 20px 20px 20px",
	"width": "30%",
	"margin": "0px 5% 0px 5%"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"children": "Some text"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "#868484",
			"children": "Some text"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"margin": "0.5rem 0px 0px 0px",
			"background": "#0469FF",
			"border-radius": "20px",
			"padding": "15px 22px 15px 22px",
			"children": "Создать набор"
		}
	}
};

const CardWithButton = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Button {...override("button")} />
		{children}
	</Box>;
};

Object.assign(CardWithButton, { ...Box,
	defaultProps,
	overrides
});
export default CardWithButton;