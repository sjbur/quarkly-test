import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"margin": "1rem 0px 0px 0px",
	"background": "#0469FF",
	"border-radius": "20px",
	"padding": "15px 24px 15px 24px",
	"children": "Разместить кнопки"
};
const overrides = {};

const BlueButton = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(BlueButton, { ...Button,
	defaultProps,
	overrides
});
export default BlueButton;