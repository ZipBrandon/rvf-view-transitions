import { Link, Outlet } from "react-router";

const SandboxVtLoaderRoute = () => {
	return (
		<div className={"p-12 flex flex-col gap-y-4"}>
			<Link to={"/"} viewTransition>
				Home
			</Link>
			<div className={"text-gray-500"}>RVF without onSubmit on the Form</div>

			<Outlet />

			<div>Nav Links with viewTransitions</div>
			<div className={"flex gap-x-8 mt-12"}>
				<Link
					className={"text-blue-500 hover:underline"}
					to={"/norvf/vt/1"}
					viewTransition
				>
					View 1
				</Link>
				<Link
					className={"text-blue-500 hover:underline"}
					to={"/norvf/vt/2"}
					viewTransition
				>
					View 2
				</Link>
				<Link
					className={"text-blue-500 hover:underline"}
					to={"/norvf/vt/3"}
					viewTransition
				>
					View 3
				</Link>
			</div>
		</div>
	);
};

export default SandboxVtLoaderRoute;
