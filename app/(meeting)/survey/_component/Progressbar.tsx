import React, { useState } from "react";
import { Progress } from "@nextui-org/react";

const ProgressBar = ({ props }: { props: { submittedFields: number, requiredFields: number } }) => {
    const { submittedFields, requiredFields } = props
    const [value, setValue] = useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => (v <= requiredFields ? 0 : v + submittedFields));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <Progress
            aria-label="Downloading..."
            size="md"
            value={value}
            color="success"
            showValueLabel={true}
            className="max-w-md"
        />
    );
}

export default ProgressBar