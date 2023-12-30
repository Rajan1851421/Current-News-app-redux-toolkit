import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import InputControl from "../InputControl/InputControl";


function Editor(props) {
    const sections = props.sections;
    const information = props.information;

    const [activeSectionKey, setActiveSectionKey] = useState(
        Object.keys(sections)[0]
    );
    const [activeInformation, setActiveInformation] = useState(
        information[sections[Object.keys(sections)[0]]]
    );
    const [activeDetailIndex, setActiveDetailIndex] = useState(0);
    const [sectionTitle, setSectionTitle] = useState(
        sections[Object.keys(sections)[0]]
    );
    const [values, setValues] = useState({
        name: activeInformation?.detail?.name || "",
        title: activeInformation?.detail?.title || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        github: activeInformation?.detail?.github || "",
        phone: activeInformation?.detail?.phone || "",
        email: activeInformation?.detail?.email || "",
    });

    const handlePointUpdate = (value, index) => {
        const tempValues = { ...values };
        if (!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index] = value;
        setValues(tempValues);
    };

    const workExpBody = (
        <div className=''>
            <div className=''>
                <InputControl
                    label="Title"
                    placeholder="Enter title eg. Frontend developer"
                    value={values.title}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
                <InputControl
                    label="Company Name"
                    placeholder="Enter company name eg. amazon"
                    value={values.companyName}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, companyName: event.target.value }))
                    }
                />
            </div>
            <div className="">
                <InputControl
                    label="Certificate Link"
                    placeholder="Enter certificate link"
                    value={values.certificationLink}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            certificationLink: event.target.value,
                        }))
                    }
                />
                <InputControl
                    label="Location"
                    placeholder="Enter location eg. Remote"
                    value={values.location}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, location: event.target.value }))
                    }
                />
            </div>
            <div className="">
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of work"
                    value={values.startDate}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, startDate: event.target.value }))
                    }
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of work"
                    value={values.endDate}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, endDate: event.target.value }))
                    }
                />
            </div>

            <div className="">
                <label>Enter work description</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
            </div>
        </div>
    );
    const projectBody = (
        <div className="">
            <div className="">
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter title eg. Chat app"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
            </div>
            <InputControl
                label="Overview"
                value={values.overview}
                placeholder="Enter basic overview of project"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, overview: event.target.value }))
                }
            />
            <div className="">
                <InputControl
                    label="Deployed Link"
                    value={values.link}
                    placeholder="Enter deployed link of project"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, link: event.target.value }))
                    }
                />
                <InputControl
                    label="Github Link"
                    value={values.github}
                    placeholder="Enter github link of project"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, github: event.target.value }))
                    }
                />
            </div>
            <div className="">
                <label>Enter project description</label>

                <textarea className="p-3 sm:w-full md:w-full lg:w-full" name="" rows="5"
                    placeholder="Project description"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                ></textarea>

            </div>
        </div>
    );
    const educationBody = (
        <div className="">
            <div className="">
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter title eg. B-tech"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
            </div>
            <InputControl
                label="College/School Name"
                value={values.college}
                placeholder="Enter name of your college/school"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, college: event.target.value }))
                }
            />
            <div className="">
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of this education"
                    value={values.startDate}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, startDate: event.target.value }))
                    }
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of this education"
                    value={values.endDate}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, endDate: event.target.value }))
                    }
                />
            </div>
        </div>
    );
    const basicInfoBody = (
        <div className=" w-full ">
            <div className="w-full">
                <InputControl
                    label="Name"
                    placeholder="Enter your full name eg. Rajan"
                    value={values.name}
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, name: event.target.value }))
                    }
                />
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter your title eg. Frontend developer"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
            </div>
            <div className="w-full">
                <InputControl
                    label="Linkedin Link"
                    value={values.linkedin}
                    placeholder="Enter your linkedin profile link"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, linkedin: event.target.value }))
                    }
                />
                <InputControl
                    label="Github Link"
                    value={values.github}
                    placeholder="Enter your github profile link"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, github: event.target.value }))
                    }
                />
            </div>
            <div className="w-full">
                <InputControl
                    label="Email"
                    value={values.email}
                    placeholder="Enter your email"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                />
                <InputControl
                    label="Enter phone"
                    value={values.phone}
                    placeholder="Enter your phone number"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, phone: event.target.value }))
                    }
                />
            </div>
        </div>
    );
    const achievementsBody = (
        <div className="flex flex-col w-full mx-auto">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <label>List your achievements</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
            </div>
        </div>

    );
    const summaryBody = (
        <div className="">
            <InputControl
                label="Summary"
                value={values.summary}
                placeholder="Enter your objective/summary"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, summary: event.target.value }))
                }
            />
        </div>
    );
    const otherBody = (
        <div className="">
            <InputControl
                label="Other"
                value={values.other}
                placeholder="Enter something"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, other: event.target.value }))
                }
            />
        </div>
    );

    const generateBody = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo:
                return basicInfoBody;
            case sections.workExp:
                return workExpBody;
            case sections.project:
                return projectBody;
            case sections.education:
                return educationBody;
            case sections.achievement:
                return achievementsBody;
            case sections.summary:
                return summaryBody;
            case sections.other:
                return otherBody;
            default:
                return null;
        }
    };

    const handleSubmission = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo: {
                const tempDetail = {
                    name: values.name,
                    title: values.title,
                    linkedin: values.linkedin,
                    github: values.github,
                    email: values.email,
                    phone: values.phone,
                };

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                        ...prev[sections.basicInfo],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.workExp: {
                const tempDetail = {
                    certificationLink: values.certificationLink,
                    title: values.title,
                    startDate: values.startDate,
                    endDate: values.endDate,
                    companyName: values.companyName,
                    location: values.location,
                    points: values.points,
                };
                const tempDetails = [...information[sections.workExp]?.details];
                tempDetails[activeDetailIndex] = tempDetail;

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.workExp]: {
                        ...prev[sections.workExp],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.project: {
                const tempDetail = {
                    link: values.link,
                    title: values.title,
                    overview: values.overview,
                    github: values.github,
                    points: values.points,
                };
                const tempDetails = [...information[sections.project]?.details];
                tempDetails[activeDetailIndex] = tempDetail;

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.project]: {
                        ...prev[sections.project],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.education: {
                const tempDetail = {
                    title: values.title,
                    college: values.college,
                    startDate: values.startDate,
                    endDate: values.endDate,
                };
                const tempDetails = [...information[sections.education]?.details];
                tempDetails[activeDetailIndex] = tempDetail;

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.education]: {
                        ...prev[sections.education],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.achievement: {
                const tempPoints = values.points;

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.achievement]: {
                        ...prev[sections.achievement],
                        points: tempPoints,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.summary: {
                const tempDetail = values.summary;

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.summary]: {
                        ...prev[sections.summary],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sections.other: {
                const tempDetail = values.other;

                props.setInformation((prev) => ({
                    ...prev,
                    [sections.other]: {
                        ...prev[sections.other],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
        }
    };

    const handleAddNew = () => {
        const details = activeInformation?.details;
        if (!details) return;
        const lastDetail = details.slice(-1)[0];
        if (!Object.keys(lastDetail).length) return;
        details?.push({});

        props.setInformation((prev) => ({
            ...prev,
            [sections[activeSectionKey]]: {
                ...information[sections[activeSectionKey]],
                details: details,
            },
        }));
        setActiveDetailIndex(details?.length - 1);
    };

    const handleDeleteDetail = (index) => {
        const details = activeInformation?.details
            ? [...activeInformation?.details]
            : "";
        if (!details) return;
        details.splice(index, 1);
        props.setInformation((prev) => ({
            ...prev,
            [sections[activeSectionKey]]: {
                ...information[sections[activeSectionKey]],
                details: details,
            },
        }));

        setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
    };

    useEffect(() => {
        const activeInfo = information[sections[activeSectionKey]];
        setActiveInformation(activeInfo);
        setSectionTitle(sections[activeSectionKey]);
        setActiveDetailIndex(0);
        setValues({
            name: activeInfo?.detail?.name || "",
            overview: activeInfo?.details
                ? activeInfo.details[0]?.overview || ""
                : "",
            link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
            certificationLink: activeInfo?.details
                ? activeInfo.details[0]?.certificationLink || ""
                : "",
            companyName: activeInfo?.details
                ? activeInfo.details[0]?.companyName || ""
                : "",
            college: activeInfo?.details
                ? activeInfo.details[0]?.college || ""
                : "",
            location: activeInfo?.details
                ? activeInfo.details[0]?.location || ""
                : "",
            startDate: activeInfo?.details
                ? activeInfo.details[0]?.startDate || ""
                : "",
            endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
            points: activeInfo?.details
                ? activeInfo.details[0]?.points
                    ? [...activeInfo.details[0]?.points]
                    : ""
                : activeInfo?.points
                    ? [...activeInfo.points]
                    : "",
            title: activeInfo?.details
                ? activeInfo.details[0]?.title || ""
                : activeInfo?.detail?.title || "",
            linkedin: activeInfo?.detail?.linkedin || "",
            github: activeInfo?.details
                ? activeInfo.details[0]?.github || ""
                : activeInfo?.detail?.github || "",
            phone: activeInfo?.detail?.phone || "",
            email: activeInfo?.detail?.email || "",
            summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
            other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
        });
    }, [activeSectionKey]);

    useEffect(() => {
        setActiveInformation(information[sections[activeSectionKey]]);
    }, [information]);

    useEffect(() => {
        const details = activeInformation?.details;
        if (!details) return;

        const activeInfo = information[sections[activeSectionKey]];
        setValues({
            overview: activeInfo.details[activeDetailIndex]?.overview || "",
            link: activeInfo.details[activeDetailIndex]?.link || "",
            certificationLink:
                activeInfo.details[activeDetailIndex]?.certificationLink || "",
            companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
            location: activeInfo.details[activeDetailIndex]?.location || "",
            startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
            endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
            points: activeInfo.details[activeDetailIndex]?.points || "",
            title: activeInfo.details[activeDetailIndex]?.title || "",
            linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
            github: activeInfo.details[activeDetailIndex]?.github || "",
            college: activeInfo.details[activeDetailIndex]?.college || "",
        });
    }, [activeDetailIndex]);

    return (
        <div className="flex mx-auto sm:w-full md:w-full lg:w-full">
            <div className="flex  w-full">
                <div className="w-full ">
                    <div className="flex flex-col mr-2 bg-transparent rounded-lg sm:bg-transparent md:bg-gray-200 lg:bg-gray-200  lg:w-1/2 md:1/2 sm:full lg:p-6 md:p-6 sm:p-1 ">
                        {Object.keys(sections)?.map((key) => (
                            <div
                                className={`flex flex-row my-2 ${activeSectionKey === key ? " sm:w-full md:w-1/2 lg:w-1/2 bg-blue-500 text-white p-3 rounded-lg" : ""
                                    }`}
                                key={key}
                                onClick={() => setActiveSectionKey(key)}
                            >
                                {sections[key]}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-row">
                        {activeInformation?.details
                            ? activeInformation?.details?.map((item, index) => (
                                <div
                                    className={`w-1/2 lg:w-full mb-2 ${activeDetailIndex === index ? "bg-gray-200" : ""
                                        }`}
                                    key={item.title + index}
                                    onClick={() => setActiveDetailIndex(index)}
                                >
                                    <p>
                                        {sections[activeSectionKey]} {index + 1}
                                    </p>
                                    <X
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleDeleteDetail(index);
                                        }}
                                    />
                                </div>
                            ))
                            : ""}
                        {activeInformation?.details &&
                            activeInformation?.details?.length > 0 ? (
                            <div
                                className="w-1/2 lg:w-full mb-2 bg-green-500 text-white cursor-pointer"
                                onClick={handleAddNew}
                            >
                                +New
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>

                <div className="w-full lg:w-3/4 pl-0 lg:pl-4">
                    <InputControl
                        label="Title"
                        placeholder="Enter section title"
                        value={sectionTitle}
                        onChange={(event) => setSectionTitle(event.target.value)}
                    />

                    {generateBody()}

                    <button className=" w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg" onClick={handleSubmission}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Editor;