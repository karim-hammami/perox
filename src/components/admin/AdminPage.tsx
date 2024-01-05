
import AdminContent from "./AdminContent";
import BeatsContent from "./BeatsContent";



export default function AdminPage() {
    
    return (
        <AdminContent>
            {/* @ts-expect-error Server Component */}
            <BeatsContent />
        </AdminContent>
    )
}