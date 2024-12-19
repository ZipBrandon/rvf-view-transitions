import { useForm } from "@rvf/react-router";
import { withZod } from "@rvf/zod";
import { Form, Outlet } from "react-router";
import { redirect } from "react-router";
import { z } from "zod";
import { SubmitButton } from "~/routes/submitButton";

export const action = async ({ request, response, context, params }) => {
	throw redirect("/norvf/vt/3");
};

const SandboxVt2LoaderRoute = () => {
	const id = "test";
	const form = useForm({
		id,
		validator: withZod(z.object({})),
		defaultValues: {},
		method: "POST",
	});
	const { action, onReset, onSubmit, ref } = form.getFormProps();
	return (
		<div className={"text-center w-32"}>
			<Form
				ref={ref}
				method="POST"
				onReset={onReset}
				id={id}
				viewTransition={true}
			/>
			<div className={"text-center"}>View 2</div>
			<SubmitButton form={id} />

			<Outlet />
		</div>
	);
};

export default SandboxVt2LoaderRoute;
