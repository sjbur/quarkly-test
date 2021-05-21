import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box
			background="#F2F6FA"
			border-radius="45px"
			display="flex"
			align-items="flex-start"
			justify-content="center"
		>
			<Box
				padding="40px 5% 0px 5%"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60a3a90546e2ba001e72c5bd/images/auf.png?v=2021-05-18T12:40:27.470Z) bottom right/450px no-repeat local border-box"
				lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60a3a90546e2ba001e72c5bd/images/auf.png?v=2021-05-18T12:40:27.470Z) 70% 100%/40% no-repeat fixed border-box"
				md-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60a3a90546e2ba001e72c5bd/images/auf.png?v=2021-05-18T12:40:27.470Z) 80% 100%/50% no-repeat fixed border-box"
				display="block"
				width="100%"
			>
				<Box display="flex" justify-content="space-between" align-items="center">
					<Box>
						<Text font="1.3rem --fontFamily-sansHelvetica" padding="0 0px 0px 0" margin="0 0px 0 0px">
							<Strong>
								USOCIAL
							</Strong>
						</Text>
					</Box>
					<Box>
						<Link href="#" margin="0px 16px 0px 8px" color="#5F6A77" text-decoration-line="initial">
							Плюсы сервиса
						</Link>
						<Link href="#" margin="0px 16px 0px 16px" color="#5F6A77" text-decoration-line="initial">
							Инструкции по установке
						</Link>
						<Link href="#" margin="0px 16px 0px 16px" color="#5F6A77" text-decoration-line="initial">
							Служба поддержки
						</Link>
					</Box>
					<Box>
						<Button background="#FFFFFF" color="#5F6A77" border-radius="8px">
							Войти
						</Button>
					</Box>
				</Box>
				<Text font="--headline2" margin="80px 0px 16px 0px">
					Конструктор кнопок{" "}
					<br />
					Поделиться и Мне{" "}
					<br />
					нравится
				</Text>
				<Text color="#606E79" margin="2rem 0px 16px 0px">
					Бесплатный сервис с популярными соц. сетями
					<br />
					{" "}и мобильным видом. Современный дизайн с массой{" "}
					<br />
					настроек, чистый код и аналитика
				</Text>
				<Components.BlueButton />
				<Box height="5rem" />
			</Box>
		</Box>
		<Box margin="50px 0px 0px 0px">
			<Text text-align="center" font="--headline2">
				Преимущества нашего
				<br />
				сервиса
			</Text>
			<Box display="flex" justify-content="center" margin="50px 0px 0px 0px">
				<Components.IconWithText />
				<Components.IconWithText />
				<Components.IconWithText />
			</Box>
			<Box display="flex" justify-content="center" margin="20px 0px 0px 0px">
				<Components.IconWithText />
				<Components.IconWithText />
				<Components.IconWithText />
			</Box>
		</Box>
		<Box display="flex" flex-direction="column" padding="30px 0px 30px 0px">
			<Box display="flex" width="100%" justify-content="center">
				<Components.CardWithButton />
				<Components.CardWithButton />
			</Box>
			<Box display="flex" width="100%" margin="50px 0px 0px 0px" justify-content="center">
				<Components.CardWithButton />
				<Components.CardWithButton />
			</Box>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});