import React, { forwardRef, useEffect, useRef, useState } from "react";


const Resume = forwardRef((props, ref) => {
    const information = props.information;
    const sections = props.sections;
    const containerRef = useRef();

    const [columns, setColumns] = useState([[], []]);
    const [source, setSource] = useState("");
    const [target, seTarget] = useState("");

    const info = {
        workExp: information[sections.workExp],
        project: information[sections.project],
        achievement: information[sections.achievement],
        education: information[sections.education],
        basicInfo: information[sections.basicInfo],
        summary: information[sections.summary],
        other: information[sections.other],
    };

    const getFormattedDate = (value) => {
        if (!value) return "";
        const date = new Date(value);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    const sectionDiv = {
        [sections.workExp]: (
            <div
                key={"workexp"}
                draggable
                onDragOver={() => seTarget(info.workExp?.id)}
                onDragEnd={() => setSource(info.workExp?.id)}
                className={`${info.workExp?.sectionTitle ? "" : "hidden"
                    } bg-white border rounded-md p-4 mb-4`}
            >
                <div className=" mb-2 underline text-2xl ">{info.workExp.sectionTitle}</div>
                <div className="space-y-4">
                    {info.workExp?.details?.map((item) => (
                        <div key={item.title}>
                            {item.title && <p className="font-bold">
                                <span className="font-bold text-black ">Role :-&nbsp;</span>
                                {item.title}</p>}
                            {item.companyName && <p className="text-gray-700">
                                <span className="font-bold text-black ">Company Name :-&nbsp;</span>
                                {item.companyName}</p>}
                            {item.certificationLink && (
                                <a className="text-blue-500 hover:underline" href={item.certificationLink}>
                                    <span className="font-bold text-black ">Certificate Link:-&nbsp;</span> {item.certificationLink}
                                </a>
                            )}
                            {item.startDate && item.endDate && (
                                <div className="flex items-center">
                                    <p> <span className="font-bold text-black ">Duration :-&nbsp;</span>
                                        {getFormattedDate(item.startDate)} - {getFormattedDate(item.endDate)}
                                    </p>


                                </div>
                            )}
                            {item.location && <p className="text-gray-700"> </p>}
                            {item.points?.length > 0 && (
                                <ul className="list-disc list-inside">
                                    {item.points?.map((elem, index) => (
                                        <li key={elem + index}>{elem}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        ),
        [sections.project]: (
            <div
                key={"project"}
                draggable
                onDragOver={() => seTarget(info.project?.id)}
                onDragEnd={() => setSource(info.project?.id)}
                className={`${info.project?.sectionTitle ? "" : "hidden"
                    } bg-white border rounded-md p-4 mb-4`}
            >
                <div className="font-bold mb-2  underline text-2xl">{info.project.sectionTitle}</div>
                <div className="space-y-4">
                    {info.project?.details?.map((item) => (
                        <div key={item.title}>
                            {item.title && <p className="font-bold">{item.title}</p>}
                            {item.link && (
                                <a className="text-blue-500 hover:underline" href={item.link}>
                                    <span className="font-bold text-black">URL-:&nbsp;</span>
                                    {item.link}
                                    <br />
                                </a>
                            )}
                            {item.github && (
                                <a className="text-blue-500 hover:underline" href={item.github}>
                                    <span className="font-bold text-black">Github-:&nbsp;</span> {item.github}
                                </a>
                            )}
                            {item.overview && (
                                <p className="text-gray-700">
                                    <span className="font-bold text-black">Overview-:&nbsp;</span>
                                    {item.overview}
                                </p>
                            )}
                            {item.points?.length > 0 && (
                                <div className="max-h-24 overflow-auto">
                                    {item.points?.map((elem, index) => (
                                        <p key={elem + index}>{elem}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        ),
        [sections.education]: (
            <div
                key={"education"}
                draggable
                onDragOver={() => seTarget(info.education?.id)}
                onDragEnd={() => setSource(info.education?.id)}
                className={`${info.education?.sectionTitle ? "" : "hidden"
                    } bg-white border rounded-md p-4 mb-4 md:w-1/2 lg:w-1/3`}
            >
                <div className="font-bold mb-2">{info.education?.sectionTitle}</div>
                <div className="space-y-4">
                    {info.education?.details?.map((item) => (
                        <div key={item.title}>
                            {item.title && <p className="font-bold">{item.title}</p>}
                            {item.college && <p className="text-gray-700">{item.college}</p>}
                            {item.startDate && item.endDate && (
                                <div className="flex items-center">
                                    <p>
                                        Duration: {getFormattedDate(item.startDate)} -{" "}
                                        {getFormattedDate(item.endDate)}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        ),

        [sections.achievement]: (
            <div
                key={"achievement"}
                draggable
                onDragOver={() => seTarget(info.achievement?.id)}
                onDragEnd={() => setSource(info.achievement?.id)}
                className={`${info.achievement?.sectionTitle ? "" : "hidden"
                    } bg-white border rounded-md p-4 mb-4`}
            >
                <div className="font-bold mb-2">{info.achievement?.sectionTitle}</div>
                <div className="space-y-4">
                    {info.achievement?.points?.length > 0 && (
                        <ul className="list-decimal list-inside">
                            {info.achievement?.points?.map((elem, index) => (
                                <li key={elem + index}>{elem}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        ),
        [sections.summary]: (
            <div
                key={"summary"}
                draggable
                onDragOver={() => seTarget(info.summary?.id)}
                onDragEnd={() => setSource(info.summary?.id)}
                className={`${info.summary?.sectionTitle ? "" : "hidden"
                    } bg-white border rounded-md p-4 mb-4`}
            >
                <div className="font-bold mb-2">{info.summary?.sectionTitle}</div>
                <div className="space-y-4">
                    <p className="text-gray-700">{info.summary?.detail}</p>
                </div>
            </div>
        ),
        [sections.other]: (
            <div
                key={"other"}
                draggable
                onDragOver={() => seTarget(info.other?.id)}
                onDragEnd={() => setSource(info.other?.id)}
                className={`${info.other?.sectionTitle ? "" : "hidden"
                    } bg-white border rounded-md p-4 mb-4`}
            >
                <div className="font-bold mb-2">{info.other?.sectionTitle}</div>
                <div className="space-y-4">
                    <p className="text-gray-700">{info?.other?.detail}</p>
                </div>
            </div>
        ),
    };

    const swapSourceTarget = (source, target) => {
        if (!source || !target) return;
        const tempColumns = [[...columns[0]], [...columns[1]]];

        let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
        let sourceColumnIndex = 0;
        if (sourceRowIndex < 0) {
            sourceColumnIndex = 1;
            sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
        }

        let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
        let targetColumnIndex = 0;
        if (targetRowIndex < 0) {
            targetColumnIndex = 1;
            targetRowIndex = tempColumns[1].findIndex((item) => item === target);
        }

        const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
        tempColumns[sourceColumnIndex][sourceRowIndex] =
            tempColumns[targetColumnIndex][targetRowIndex];

        tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

        setColumns(tempColumns);
    };

    useEffect(() => {
        setColumns([
            [sections.project, sections.education, sections.summary],
            [sections.workExp, sections.achievement, sections.other],
        ]);
    }, []);

    useEffect(() => {
        swapSourceTarget(source, target);
    }, [source]);

    useEffect(() => {
        const container = containerRef.current;
        if (!props.activeColor || !container) return;

        container.style.setProperty("--color", props.activeColor);
    }, [props.activeColor]);

    return (
        <>
            <br />
            <div >
                <div ref={ref} >
                    <div ref={containerRef} className="p-5 bg-white h-screen ">
                        <div className="mb-8">
                            <p className="text-4xl font-bold">{info.basicInfo?.detail?.name}</p>
                            <p className="text-lg text-gray-700">{info.basicInfo?.detail?.title}</p>

                            <div className="mt-4  text-left">
                                {info.basicInfo?.detail?.email && (
                                    <a className="text-blue-500 hover:underline" href={`mailto:${info.basicInfo?.detail?.email}`}>
                                        <span className="font-bold text-black ">Email-:&nbsp;</span>{info.basicInfo?.detail?.email}
                                        <br />
                                    </a>
                                )}
                                {info.basicInfo?.detail?.phone && (
                                    <a className="text-blue-500 hover:underline">
                                        <span className="font-bold text-black ">Phone-:&nbsp;</span>{info.basicInfo?.detail?.phone}
                                    </a>
                                )}
                                {info.basicInfo?.detail?.linkedin && (
                                    <p className="text-blue-500 hover:underline">
                                        <span className="font-bold text-black ">LinkedIn-:&nbsp;</span>{info.basicInfo?.detail?.linkedin}
                                    </p>
                                )}
                                {info.basicInfo?.detail?.github && (
                                    <a className="text-blue-500 hover:underline">
                                        <span className="font-bold text-black ">Github-:&nbsp;</span>{info.basicInfo?.detail?.github}
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                {columns[0].map((item) => sectionDiv[item])}
                            </div>
                            <div>
                                {columns[1].map((item) => sectionDiv[item])}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );

});

export default Resume;
