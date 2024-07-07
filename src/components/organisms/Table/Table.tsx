import { useState } from "react";
// assets
// import PointMenu from "@/assets/icons/points.svg";
import Edit from "./icon/Edit.svg";
import Delete from "./icon/Delete.svg";

// Styles
import "./Table.scss";

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
                        <span>{`Page ${
                            currentPage + 1
                        } of ${totalPages}`}</span>
                    </div>
                    <div className="cnt_btns">
                        <button
                            onClick={handleClickPrev}
                            className={`${"bnt_controls"} ${
                                currentPage === 0 ? "btn_prev_hidden" : ""
                            }`}
                            disabled={currentPage === 0}
                        >
                            Previous
                        </button>
                        <button
                            className={`${"bnt_controls"} ${
                                currentPage === totalPages - 1
                                    ? "btn_next_hidden"
                                    : ""
                            }`}
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
