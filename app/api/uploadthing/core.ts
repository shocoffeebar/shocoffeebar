import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  pdfUploader: f({ pdf: { maxFileSize: '4MB', maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log('file url', file.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { fileURL: file.url };
    }),
  textUploader: f({
    text: { maxFileSize: '4MB', maxFileCount: 1 },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log('file url', file.url);
    return { fileURL: file.url };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
