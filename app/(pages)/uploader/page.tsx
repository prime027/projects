"use client";

import React, { FC } from "react";
import Uploader from "../../components/Uploader";

const Page: FC = () => {
	return (
		<div className="mx-auto py-10 bg-background text-text flex flex-col-reverse gap-10 md:flex-row justify-center items-start">
			<div className="p-10 w-full md:w-1/3 md:p-0">
				<Uploader showImageView={true} showReceiptView={true} />
			</div>
		</div>
	);
};

export default Page;
