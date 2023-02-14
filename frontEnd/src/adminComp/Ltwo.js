import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const Ltwo = () => {
    const [lone, setLone] = useState([]);
    useEffect(() => {
        const fetchTable = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3500/admin/licences",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ licence: "licence two two" }),
                    }
                );
                const cursor = await response.json();
                const result = cursor.cursor;
                setLone(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTable();
        console.log("finish");
    }, []);
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>CNE</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>date de naissance</th>
                        <th>phone</th>
                        <th>city</th>
                        <th>code postal</th>
                        <th>diplom</th>
                    </tr>
                </thead>
                <tbody>
                    {lone.map((item) => {
                        return (
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.cne}</td>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.sex}</td>
                                <td>{item.age}</td>
                                <td>{item.phone}</td>
                                <td>{item.city}</td>
                                <td>{item.codepostal}</td>
                                <td>{item.diplom}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default Ltwo;
