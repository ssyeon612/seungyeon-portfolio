import { DATABASE_ID, TOKEN } from "@/app/config";

export async function getData() {
    const options = {
        method: "POST",
        headers: {
            accept: "application/json",
            "Notion-Version": "2022-06-28",
            "content-type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({ page_size: 100 }),
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
