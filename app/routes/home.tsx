import { useForm } from "@rvf/react-router";
import { withZod } from "@rvf/zod";
import { Form, Link } from "react-router";
import { z } from "zod";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<div className={"flex flex-col gap-y-8 p-12"}>
			<Link className={"text-blue-500 hover:underline"} to={"/norvf/vt/1"}>
				RVF without submit on Form -- viewTransitions work
			</Link>
			<Link to={"/rvf/vt/1"} className={"text-blue-500 hover:underline"}>
				RVF with submit on Form -- viewTransitions broken
			</Link>
		</div>
	);
}
