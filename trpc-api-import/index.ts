import fs from 'fs';
// import { Octokit } from 'octokit';

type TrpcApiDist = {
  owner: string;
  repository: string;
  filePaths: ReadonlyArray<{
    sourcePath: string;
    targetPath: string;
  }>;
};

const TRPC_API_DIST = {
  owner: 'JtotheDoubleO',
  repository: 'trpc-resto-api',
  filePaths: [
    {
      sourcePath: 'trpc-api-export/dist/index.d.ts',
      targetPath: 'src/trpc-apis/api-types/index.d.ts',
    },
    {
      sourcePath: 'trpc-api-export/dist/index.js',
      targetPath: 'src/trpc-apis/api-types/index.js',
    },
  ],
} as const satisfies TrpcApiDist;

const trpcApiImport = async () => {
  const { Octokit } = await import('octokit');

  const octokit = new Octokit({
    // Provide token if using private GitHub repository
    // auth: <GITHUB_TOKEN>,
  });

  TRPC_API_DIST.filePaths.map(async (trpcApiFilePath) => {
    const octokitResponse = await octokit.rest.repos.getContent({
      owner: TRPC_API_DIST.owner,
      repo: TRPC_API_DIST.repository,
      path: trpcApiFilePath.sourcePath,
    });

    if (!('content' in octokitResponse.data)) {
      throw Error(
        `Error: No content available to download - File ${trpcApiFilePath.sourcePath}.`,
      );
    }

    const decodedFileContent = Buffer.from(
      octokitResponse.data.content,
      'base64',
    );

    fs.writeFileSync(trpcApiFilePath.targetPath, decodedFileContent);
  });

  console.log('### tRPC API successfully imported. ###');
};

trpcApiImport();
