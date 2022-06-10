import React from 'react';

import {useForm} from "react-hook-form";

export const FileUploadPage = ({moreDetails, latitude, longitude, category, size, color, quantity, secondaryColor}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch(`http://localhost:8081/api/v1/todo?moreDetails=${moreDetails ? moreDetails : 'N/A'}&latitude=${latitude ? latitude : 'N/A'}&longitude=${longitude ? longitude : 'N/A'}&category=${category ? category : 'N/A'}&size=${size ? size : 'N/A'}&color=${color ? color : 'N/A'}&quantity=${quantity ? quantity : 'N/A'}&secondaryColor=${secondaryColor ? secondaryColor : 'N/A'}`,
            {
                method: "POST",
                body: formData,
            }).then((res) => res.status);
    };

    return (
        <form className="upload" onSubmit={handleSubmit(onSubmit)}>
            <input type="file" {...register("file")} />

            <input type="submit"/>
        </form>
    );
}
