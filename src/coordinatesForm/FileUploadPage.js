import React from 'react';

import {useForm} from "react-hook-form";

export const FileUploadPage = ({latitude, longitude, category, size, color, quantity, secondaryColor}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch(`http://localhost:8081/api/v1/todo?title=${"got to delete"}&description=${"got to delete"}&moreDetails=${"got to delete"}&latitude=${latitude}&longitude=${longitude}&category=${category}&size=${size}&color=${color}&quantity=${quantity}&secondaryColor=${secondaryColor}`,
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
