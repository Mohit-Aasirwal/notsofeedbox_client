import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Custom404 = () => {
	const router = useRouter();
	// 404 error page component auto redirect to home page
	useEffect(() => {
		router.push("/");
	});
};

export default Custom404;
