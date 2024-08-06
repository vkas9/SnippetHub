"use client"
import { quickLinkAction } from '@/lib/store/features/quicklinkSlice';
import { useAppDispatch } from '@/lib/store/hooks';
import React, { useEffect, useCallback } from 'react';

const SnippetModal = () => {
    const dispatch = useAppDispatch();

    const handleResize = useCallback(() => {
        dispatch(quickLinkAction.setMobileView(window.innerWidth <= 640));
    }, [dispatch]);

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return (
        <div>
        
        </div>
    );
};

export default SnippetModal;
