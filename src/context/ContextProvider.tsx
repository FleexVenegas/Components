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
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [openAside, setOpenAside] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 768);

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
