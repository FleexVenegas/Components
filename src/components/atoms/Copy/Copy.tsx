import "./Copy.scss";

import { useClipboard } from "use-clipboard-copy";

//Assets
import { useEffect, useState } from "react";

interface CopyProps {
    dataCopy?: string;
}

const Copy = ({ dataCopy }: CopyProps) => {
    const clipboard = useClipboard();

    const [textCopy, setTextCopy] = useState(false);

    const handleCopy = () => {
        clipboard.copy(dataCopy);
        setTextCopy(true);
    };

    useEffect(() => {
        if (textCopy) {
            setTimeout(() => {
                setTextCopy(false);
            }, 2000);
        }
    }, [textCopy]);

    return (
        <div className="Container-copy">
            <button className="copy" onClick={handleCopy}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="btn-svg "
                >
                    <path
                        fill="#7090c0"
                        d="M5.503 4.627L5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.25 2.25 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123M17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2z"
                    />
                </svg>
            </button>
            {textCopy && <span className="mess-copy">Copied!</span>}
        </div>
    );
};

export default Copy;
