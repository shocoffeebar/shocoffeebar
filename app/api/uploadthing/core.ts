import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

export const ourFileRouter = {
  resumeUploader: f({
    pdf: { maxFileSize: '4MB', maxFileCount: 1 },
    text: { maxFileSize: '4MB', maxFileCount: 1 },
    'text/csv': { maxFileSize: '4MB', maxFileCount: 1 },
    'application/msword': { maxFileSize: '4MB', maxFileCount: 1 },
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
      maxFileSize: '4MB',
      maxFileCount: 1,
    },
  }).onUploadComplete(async ({ metadata, file }) => {
    return { fileURL: file.url };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
