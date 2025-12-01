import React, { useEffect, useRef, useState } from "react";
import img from "../assets/Harvard.jpg";
import "../App.css";

type Props = {
    durationMs?: number;
    oncePerSession?: boolean;
    storageKey?: string;
    showImmediately?: boolean;
};


export default function ShowReklama({
    durationMs = 7000,
    oncePerSession = true,
    storageKey = "reklamaShown",
    showImmediately = true,
}: Props) {
    const [visible, setVisible] = useState(false);
    const timerRef = useRef<number | null>(null);
    const rafRef = useRef<number | null>(null);
    const firstInputRef = useRef<HTMLInputElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState(false);
    const closeTimerRef = useRef<number | null>(null);
    const autoHideMs = 4000;


    useEffect(() => {
        if (!showImmediately) return;

        if (oncePerSession && typeof window !== "undefined") {
            try {
                if (sessionStorage.getItem(storageKey)) {
                    return;
                }
            } catch (err) {

            }
        }

        timerRef.current = window.setTimeout(() => {
            openModal();
        }, durationMs);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };

    }, [durationMs, oncePerSession, storageKey, showImmediately]);


    useEffect(() => {
        return () => {
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current);
                closeTimerRef.current = null;
            }
        };
    }, []);

    const openModal = () => {
        setVisible(true);
        document.documentElement.classList.add("body-modal-open");
        try {
            if (oncePerSession) sessionStorage.setItem(storageKey, "1");
        } catch (err) {

        }
        setTimeout(() => firstInputRef.current?.focus(), 60);
    };

    const hideModal = () => {
        setVisible(false);
        document.documentElement.classList.remove("body-modal-open");
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && visible) hideModal();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [visible]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) {
            hideModal();
        }
    };

    if (!visible) return null;

    return (
        <div
            ref={overlayRef}
            className="reklama-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Реклама"
            onMouseDown={handleBackdropClick}

        >
            <div
                className="reklama-card"
                role="document"
                onMouseDown={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="reklama-close"
                    aria-label="Закрыть"
                    onClick={hideModal}
                >
                    ×
                </button>
                <div id="demo2" className="section-inner2">
                    <img src={img} alt="" width={630} height={320} />
                    <div style={{width: 340, height: 100, backgroundColor: "white",position:"absolute", top:415, left:700, right:0, borderRadius: 10}}>
                        <p style={{color: "red", fontSize: 28, textAlign: "center"}}>Talaba bolishga shoshiling </p>
                        <p style={{color: "red", fontSize: 28, fontWidth: "800",marginTop:-23, textAlign: "center"}}>Ilm sari kelajak poydevor</p>
                    </div>
                </div>
            </div>
        </div>
    );
}