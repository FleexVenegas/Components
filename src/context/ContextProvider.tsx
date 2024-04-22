import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    useEffect,
} from "react";

interface AppContextProps {
    openAside: boolean;
    setOpenAside: Dispatch<SetStateAction<boolean>>;
    windowWidth: boolean;
    setWindowWidth: Dispatch<SetStateAction<boolean>>;
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [openAside, setOpenAside] = useState(false);
    const [showModal, setShowModal] = useState<boolean>(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const stateModal = localStorage.getItem("viewModal");
        if (stateModal === "true") {
            setShowModal(false);
        }
    }, []);

    useEffect(() => {
        if (!showModal) {
            localStorage.setItem("viewModal", "true");
        }
    }, [showModal]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <AppContext.Provider
            value={{
                openAside,
                setOpenAside,
                windowWidth,
                setWindowWidth,
                showModal,
                setShowModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useStateContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error(
            "useStateContext must be used within a ContextProvider"
        );
    }
    return context;
};
