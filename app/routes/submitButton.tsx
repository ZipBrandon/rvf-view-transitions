export function SubmitButton(props: { form: string }) {
	return (
		<button
			form={props.form}
			type={"submit"}
			className="text-white bg-blue-500 py-4 px-8 rounded-md uppercase mt-4"
		>
			submit
		</button>
	);
}
