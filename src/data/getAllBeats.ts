import { Beats } from "@/types/Beats";
import { db } from "@/utils/db";

export async function getAllBeats(): Promise<Beats | null> {
    const beats: Beats = await db.beats.findMany({
        select: {
            id: true,
            name: true,
            producer: true,
            bpm: true,
            price: true,
            genre: true,
            license: {
              select: {
                name: true,
              },
            },
          },
      })

    if (!beats) {
        return null
    }



    return beats
}