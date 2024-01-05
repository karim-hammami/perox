import { getAllBeats } from "@/data/getAllBeats"
import { Beats } from "@/types/Beats"


export const dynamic = 'force-dynamic'
export const revalidate = 0
export default async function BeatsContent() {
    const data: Beats | null = await getAllBeats()
    return (
        <table className="w-full table-auto border-spacing-2 sm:overflow-scroll">
            <tr className="font-bold text-2xl border-b-2 border-b-blanche text-blanche">
                <th className="px-8 py-5">Name</th>
                <th className="px-8 py-5">Producer</th>
                <th className="px-8 py-5">BPM</th>
                <th className="px-8 py-5">Price</th>
                <th className="px-8 py-5">Genre</th>
                <th className="px-8 py-5">License</th>
                <th className="px-8 py-5">Actions</th>
            </tr>
            
            {data?.map((beat) => {
                return (
                    <tr key={beat.id} className="text-blanche  font-bold text-lg">
                        <th>{beat.name}</th>
                        <th>{beat.producer}</th>
                        <th>{beat.bpm}</th>
                        <th>{beat.price}</th>
                        <th>{beat.genre}</th>
                        <th>{beat.license.name}</th>
                        <th>...</th>
                    </tr>
                )
            })}
           
        </table>
    )
}