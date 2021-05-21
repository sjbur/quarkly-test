import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Text, Box } from "@quarkly/widgets";
import { IoLogoTwitter } from "react-icons/io";
const defaultProps = {
	"text-align": "center",
	"display": "flex",
	"flex-direction": "column",
	"align-items": "center",
	"padding": "0px 15px 0px 15px",
	"margin": "0px 10px 0px 10px"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "io",
			"icon": IoLogoTwitter,
			"color": "#005AF6",
			"font": "--headline2"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"children": "Some text"
		}
	}
};

const IconWithText = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Icon {...override("icon")} />
		<Text {...override("text")} />
		{children}
	</Box>;
};

Object.assign(IconWithText, { ...Box,
	defaultProps,
	overrides
});
export default IconWithText;