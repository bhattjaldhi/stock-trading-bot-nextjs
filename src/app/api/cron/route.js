export const dynamic = 'force-dynamic' // defaults to auto
export async function POST() {
    return Response.json({ success: true, message: 'Data updated successfully' });
}
