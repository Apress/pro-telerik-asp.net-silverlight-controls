using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Web;
using Telerik.Web.UI;
using Telerik.Web.UI.Widgets;

namespace WebApplication1
{
    public class MyCustomFileBrowserContentProvider : FileBrowserContentProvider
    {
        public MyCustomFileBrowserContentProvider(HttpContext context, string[] searchPatterns, string[] viewPaths, string[] uploadPaths, string[] deletePaths, string selectedUrl, string selectedItemTag) : base(context, searchPatterns, viewPaths, uploadPaths, deletePaths, selectedUrl, selectedItemTag)
        {
        }

        public override DirectoryItem ResolveRootDirectoryAsTree(string path)
        {
            throw new NotImplementedException();
        }

        public override DirectoryItem ResolveDirectory(string path)
        {
            throw new NotImplementedException();
        }

        public override string GetFileName(string url)
        {
            throw new NotImplementedException();
        }

        public override string GetPath(string url)
        {
            throw new NotImplementedException();
        }

        public override Stream GetFile(string url)
        {
            throw new NotImplementedException();
        }

        public override string StoreBitmap(Bitmap bitmap, string url, ImageFormat format)
        {
            throw new NotImplementedException();
        }

        public override string StoreFile(UploadedFile file, string path, string name, params string[] arguments)
        {
            throw new NotImplementedException();
        }

        public override string DeleteFile(string path)
        {
            throw new NotImplementedException();
        }

        public override string DeleteDirectory(string path)
        {
            throw new NotImplementedException();
        }

        public override string CreateDirectory(string path, string name)
        {
            throw new NotImplementedException();
        }
    }
}