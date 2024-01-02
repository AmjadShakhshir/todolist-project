const apiRequest = async (url: string = '', optionsObj: any = null, errMsg: any = null) => {
    try {
        const res = await fetch(url, optionsObj);
        if (!res.ok) throw new Error("Please reload the page and try again.");
    } catch (err) {
        if (err instanceof Error) {
            errMsg = err.message;
        }
    } finally {
        return errMsg;
    }
};

export default apiRequest;