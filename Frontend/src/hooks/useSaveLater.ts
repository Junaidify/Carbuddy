import { useCallback, useState } from "react";
import axios from "axios";


export const useSaveLater = () => {
    const [savelater, setSaveLater] = useState<{ [key: string]: boolean }>({})

    const handleSaveLater = useCallback(async (id: string) => {
        try {
            if (savelater[id]) {
                const res = await axios.delete("http://localhost:3000/savelater", {
                    data: { id }
                });

                if (res.status === 200) {
                    setSaveLater(prev => ({ ...prev, [id]: false }));
                    alert("Car removed from save later");
                }
            }
            else {
                const res = await axios.post("http://localhost:3000/savelater", { id });
                if (res.status === 201) {
                    setSaveLater(prev => ({ ...prev, [id]: true }));
                }
            }

        } catch (err) {
            console.log(err);
        }
    }, [savelater]);

    return {
        handleSaveLater,
        isSaved: (id: string) => !!savelater[id]
    }
}