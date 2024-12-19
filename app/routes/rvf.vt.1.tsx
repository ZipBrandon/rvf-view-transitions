import { useForm } from "@rvf/react-router";
import { withZod } from "@rvf/zod";
import { Form, Outlet } from "react-router";
import { redirect } from "react-router";
import { z } from "zod";
import { SubmitButton } from "~/routes/submitButton";

export const action = async ({ request, response, context, params }) => {
	throw redirect("/rvf/vt/2");
};

const SandboxVt1LoaderRoute = () => {
	const form = useForm({
		id: "test",
		validator: withZod(z.object({})),
		defaultValues: {},
		method: "POST",
	});
	const { action, id, onReset, onSubmit, ref } = form.getFormProps();
	return (
		<div className={"text-center w-64"}>
			<Form
				ref={ref}
				method="POST"
				onReset={onReset}
				id={id}
				onSubmit={onSubmit}
				viewTransition={true}
			/>
			<div className={"text-center"}>View 1</div>
			<SubmitButton form={id} />

			<Outlet />
		</div>
	);
};

export default SandboxVt1LoaderRoute;
