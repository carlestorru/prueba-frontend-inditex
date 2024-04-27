import { useParams } from "react-router-dom";

export default function EpisodeDetails() {
    const { episodeId } = useParams();
    return <p>{episodeId}</p>
}