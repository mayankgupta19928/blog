'use server'

export async function createInvoice( formData:any) {
 
    const rawFormData = {
        title: formData.get('title'),
        content: formData.get('content'), 
 
    }
     return false

  }