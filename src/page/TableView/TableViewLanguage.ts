export const JavaScript = `
import { useState } from "react";

// assets
import Edit from "./icon/Edit.svg";
import Delete from "./icon/Delete.svg";

// Styles
import "./Table.scss";

const Table = ({
    actions = false,
    rowPorPage = 5,
    functionEdit,
    functionDelete,
    data,
    columns,
    actionsColumnName = "Actions",
    truncate,
}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = rowPorPage;
    const totalPages = Math.ceil(data?.length / itemsPerPage);

    const handleClickNext = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    const handleClickPrev = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const paginatedData = data.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const truncateText = (text, maxLength) => {
        if (text?.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className="Cnt_table">
            <table className="table">
                <thead className="thead">
                    <tr className="tr">
                        {columns.map((column, idx) => (
                            <th
                                className="th"
                                style={{ width: column.width }}
                                key={idx}
                            >
                                {column.header}
                            </th>
                        ))}
                        {actions && (
                            <th className="actionts_">{actionsColumnName}</th>
                        )}
                    </tr>
                </thead>
                <tbody className="tbody">
                    {paginatedData?.map((row, idx) => (
                        <tr className="tr" key={idx}>
                            {columns.map((column, idx) => (
                                <td
                                    className="td"
                                    style={{ width: column.width }}
                                    key={idx}
                                >
                                    {truncate &&
                                    truncate.includes(column.accessor) ? (
                                        <span>
                                            {truncateText(
                                                row[column.accessor],
                                                10
                                            )}
                                        </span>
                                    ) : (
                                        <span
                                            className={
                                                row[column.accessor] ===
                                                "active"
                                                    ? "status-bg greenStatus"
                                                    : row[column.accessor] ===
                                                      "inactive"
                                                    ? "status-bg orangeStatus"
                                                    : ""
                                            }
                                        >
                                            {row[column.accessor]}
                                        </span>
                                    )}
                                </td>
                            ))}
                            {actions && (
                                <td className="action_body">
                                    <div className="cnt_images">
                                        <img
                                            src={Edit}
                                            alt=""
                                            onClick={() =>
                                                functionEdit?.(row._id)
                                            }
                                        />
                                        <img
                                            src={Delete}
                                            alt=""
                                            onClick={() =>
                                                functionDelete?.(row._id)
                                            }
                                        />
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {data.length > 0 && (
                <div className="cnt_controlls">
                    <div className="cnt_spans">
                        <span>Total records: {data?.length}</span>
                        <span>{"Page $(
                            currentPage + 1
                        ) of $(totalPages)"}</span>
                    </div>
                    <div className="cnt_btns">
                        <button
                            onClick={handleClickPrev}
                            className={"$("bnt_controls") $(
                                currentPage === 0 ? "btn_prev_hidden" : ""
                            }"}
                            disabled={currentPage === 0}
                        >
                            Previous
                        </button>
                        <button
                            className={"$("bnt_controls"} $(
                                currentPage === totalPages - 1
                                    ? "btn_next_hidden"
                                    : ""
                            )"}
                            onClick={handleClickNext}
                            disabled={currentPage === totalPages - 1}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Table;
`
export const TypeScript = `
import { useState } from "react";

// assets
import Edit from "./icon/Edit.svg";
import Delete from "./icon/Delete.svg";

// Styles
import "./Table.scss";

// Interfaces
interface TableProps {
    data: any[];
    columns: any[];
    width?: string;
    actionsColumnName?: string;
    truncate?: string[];
    actions?: boolean;
    rowPorPage?: number;
    functionEdit?: (id: string) => void;
    functionDelete?: (id: string) => void;
}

const Table = ({
    actions = false,
    rowPorPage = 5,
    functionEdit,
    functionDelete,
    data,
    columns,
    actionsColumnName = "Actions",
    truncate,
}: TableProps) => {
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = rowPorPage;
    const totalPages = Math.ceil(data?.length / itemsPerPage);

    const handleClickNext = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    const handleClickPrev = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const paginatedData = data.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const truncateText = (text: string, maxLength: number) => {
        if (text?.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className="Cnt_table">
            <table className="table">
                <thead className="thead">
                    <tr className="tr">
                        {columns.map((column, idx) => (
                            <th
                                className="th"
                                style={{ width: column.width }}
                                key={idx}
                            >
                                {column.header}
                            </th>
                        ))}
                        {actions && (
                            <th className="actionts_">{actionsColumnName}</th>
                        )}
                    </tr>
                </thead>
                <tbody className="tbody">
                    {paginatedData?.map((row, idx) => (
                        <tr className="tr" key={idx}>
                            {columns.map((column, idx) => (
                                <td
                                    className="td"
                                    style={{ width: column.width }}
                                    key={idx}
                                >
                                    {truncate &&
                                    truncate.includes(column.accessor) ? (
                                        <span>
                                            {truncateText(
                                                row[column.accessor],
                                                10
                                            )}
                                        </span>
                                    ) : (
                                        <span
                                            className={
                                                row[column.accessor] ===
                                                "active"
                                                    ? "status-bg greenStatus"
                                                    : row[column.accessor] ===
                                                      "inactive"
                                                    ? "status-bg orangeStatus"
                                                    : ""
                                            }
                                        >
                                            {row[column.accessor]}
                                        </span>
                                    )}
                                </td>
                            ))}
                            {actions && (
                                <td className="action_body">
                                    <div className="cnt_images">
                                        <img
                                            src={Edit}
                                            alt=""
                                            onClick={() =>
                                                functionEdit?.(row._id)
                                            }
                                        />
                                        <img
                                            src={Delete}
                                            alt=""
                                            onClick={() =>
                                                functionDelete?.(row._id)
                                            }
                                        />
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {data.length > 0 && (
                <div className="cnt_controlls">
                    <div className="cnt_spans">
                        <span>Total records: {data?.length}</span>
                        <span>{"Page $(
                            currentPage + 1
                        ) of $(totalPages)"}</span>
                    </div>
                    <div className="cnt_btns">
                        <button
                            onClick={handleClickPrev}
                            className={"$("bnt_controls") $(
                                currentPage === 0 ? "btn_prev_hidden" : ""
                            }"}
                            disabled={currentPage === 0}
                        >
                            Previous
                        </button>
                        <button
                            className={"$("bnt_controls"} $(
                                currentPage === totalPages - 1
                                    ? "btn_next_hidden"
                                    : ""
                            )"}
                            onClick={handleClickNext}
                            disabled={currentPage === totalPages - 1}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Table;

`

export const CSS = `
.Cnt_table {
    width: 100%;
    position: relative;
}

.Cnt_table .table {
    width: 100%;
    border-collapse: collapse;
    background: transparent;
}

.Cnt_table .table .thead {
    text-align: left;
    height: 35px;
    width: 100%;
    background: #fff;
}

.Cnt_table .table .thead .tr {
    width: 100%;
    text-align: center;
    border-radius: 10px 0;
}

.Cnt_table .table .thead .tr .th {
    font-weight: 500;
    font-size: 1rem;
    padding: 0 8px;
    color: #000;
}

.Cnt_table .table .thead .tr .th:nth-child(1) {
    border-top-left-radius: 10px;
}

.Cnt_table .table .thead .tr .actionts_ {
    border-top-right-radius: 10px;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0 8px;
    user-select: none;
}

.Cnt_table .table .tbody .tr {
    height: 40px;
    transition: all 0.3s;
    text-align: center;
    border-bottom: 1px solid #ced8e9;
}

.Cnt_table .table .tbody .tr:hover {
    font-weight: 400;
    color: #f4f6fb;
    background: #a2b7d7;
}

.Cnt_table .table .tbody .tr .td {
    padding: 0 8px;
    font-size: 1rem;
    text-align: center;
}

.Cnt_table .table .tbody .tr .td span {
    text-align: center;
    color: #131926;
}

.Cnt_table .table .tbody .tr .td .status-bg {
    padding: 3px 7px;
    border-radius: 5px;
    font-size: 0.8rem;
}

.Cnt_table .table .tbody .tr .td .status-bg.greenStatus {
    background: #008000;
    color: #fff;
}

.Cnt_table .table .tbody .tr .td .status-bg.orangeStatus {
    background: #ff0000;
    color: #fff;
}

.Cnt_table .table .tbody .tr .action_body {
    width: 10%;
    padding: 0 8px;
    font-size: 1rem;
    text-align: center;
    user-select: none;
}

.Cnt_table .table .tbody .tr .action_body .cnt_images {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
}

.Cnt_table .table .tbody .tr .action_body .cnt_images img {
    cursor: pointer;
    width: 20px;
    height: 20px;
    -webkit-filter: invert(12%) sepia(10%) saturate(2097%) hue-rotate(159deg) brightness(95%) contrast(90%);
    filter: invert(12%) sepia(10%) saturate(2097%) hue-rotate(159deg) brightness(95%) contrast(90%);
    transition: all 0.5s;
}

.Cnt_table .table .tbody .tr .action_body .cnt_images img:hover {
    transform: scale(1.2);
}

.Cnt_table .cnt_controlls {
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    user-select: none;
}

.Cnt_table .cnt_controlls .cnt_spans {
    display: flex;
    gap: 40px;
}

.Cnt_table .cnt_controlls .cnt_spans span {
    font-size: 1.1rem;
    color: #293751;
    font-weight: 400;
}

.Cnt_table .cnt_controlls .cnt_btns {
    display: flex;
    align-items: center;
    gap: 20px;
}

.Cnt_table .cnt_controlls .cnt_btns .bnt_controls {
    width: 180px;
    height: 40px;
    border-radius: 7px;
    color: #293751;
    font-weight: bold;
    background: #ced8e9;
    transition: all 0.5s;
    opacity: 1;
    user-select: none;
    cursor: pointer;
}

.Cnt_table .cnt_controlls .cnt_btns .bnt_controls.btn_prev_hidden {
    pointer-events: none;
    opacity: 0.2;
}

.Cnt_table .cnt_controlls .cnt_btns .bnt_controls.btn_next_hidden {
    pointer-events: none;
    opacity: 0.2;
}

@keyframes slideIn {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}

`

export const USE = `
const columns = [
    { header: 'ID', accessor: '_id', width: '8%' },
    { header: 'Name', accessor: 'name', width: '15%' },
    { header: 'Lastname', accessor: 'lastname', width: '15%' },
    { header: 'Email', accessor: 'email', width: '17%' },
    { header: 'Created', accessor: 'createdAt', width: '10%' },
    { header: 'Status', accessor: 'status', width: '10%' }
];

const data = [
    {
        _id: '1',
        name: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
        status: 'active',
        createdAt: '2024-01-01',
    }
];

// Debe de coincidir igual que el accesor de la columna, si no
// se desea truncar, solo no se le pasa nada.

const dataTruncate = ["email"];

const handleEdit = (id) => {
    console.log("Editar el:", id);
};

const handleDelete = (id) => {
    console.log("Eliminar el:", id);
};

<Table
    columns={columns}
    data={data}
    actions
    rowPorPage={4}
    truncate={dataTruncate}
    functionEdit={handleEdit}
    functionDelete={handleDelete}
/>
`