//Copyright (c) Telerik.  All rights reserved.
//
// usage example:
//
// // Get ObjectScope from ObjectScopeProvider
// IObjectScope scope = NorthwindScopeProvider.ObjectScope();
// // start transaction
// scope.Transaction.Begin();
// // create new persistent object person and add to scope
// Person p = new Person();
// scope.Add(p);
// // commit transction
// scope.Transaction.Commit();
//

using Telerik.OpenAccess;
using Telerik.OpenAccess.Util;
//using System.Web;
//using System.Threading;

namespace TR.Reports
{
	/// <summary>
	/// This class provides an object context for connected database access.
	/// </summary>
	/// <remarks>
	/// This class can be used to obtain an IObjectScope instance required for a connected database
	/// access.
	/// </remarks>
	public class NorthwindScopeProvider : IObjectScopeProvider
	{
		private Database myDatabase;
		private IObjectScope myScope;

		static private NorthwindScopeProvider _theNorthwindScopeProvider;

		/// <summary>
		/// Constructor.
		/// </summary>
		/// <remarks></remarks>
		public NorthwindScopeProvider()
		{
		}

        /// <summary>
		/// Adjusts for dynamic loading when no entry assembly is available/configurable.
		/// </summary>
		/// <remarks>
        /// When dynamic loading is used, the configuration path from the
        /// applications entry assembly to the connection setting might be broken.
        /// This method makes up the necessary configuration entries.
        /// </remarks>
        static public void AdjustForDynamicLoad()
        {
            if( _theNorthwindScopeProvider == null )
                _theNorthwindScopeProvider = new NorthwindScopeProvider();

            if( _theNorthwindScopeProvider.myDatabase == null )
            {
                string assumedInitialConfiguration =
                           "<openaccess>" +
                               "<references>" +
                                   "<reference assemblyname='PLACEHOLDER' configrequired='True'/>" +
                               "</references>" +
                           "</openaccess>";
                System.Reflection.Assembly dll = _theNorthwindScopeProvider.GetType().Assembly;
                assumedInitialConfiguration = assumedInitialConfiguration.Replace(
                                                    "PLACEHOLDER", dll.GetName().Name);
                System.Xml.XmlDocument xmlDoc = new System.Xml.XmlDocument();
                xmlDoc.LoadXml(assumedInitialConfiguration);
                Database db = Telerik.OpenAccess.Database.Get("NorthwindConnection", 
                                            xmlDoc.DocumentElement,
                                            new System.Reflection.Assembly[] { dll } );

                _theNorthwindScopeProvider.myDatabase = db;
            }
        }

		/// <summary>
		/// Returns the instance of Database for the connectionId 
		/// specified in the Enable Project Wizard.
		/// </summary>
		/// <returns>Instance of Database.</returns>
		/// <remarks></remarks>
		static public Database Database()
		{
			if( _theNorthwindScopeProvider == null )
				_theNorthwindScopeProvider = new NorthwindScopeProvider();

			if( _theNorthwindScopeProvider.myDatabase == null )
				_theNorthwindScopeProvider.myDatabase = Telerik.OpenAccess.Database.Get( "NorthwindConnection" );

			return _theNorthwindScopeProvider.myDatabase;
		}

		/// <summary>
		/// Returns the instance of ObjectScope for the application.
		/// </summary>
		/// <returns>Instance of IObjectScope.</returns>
		/// <remarks></remarks>
		static public IObjectScope ObjectScope()
		{
			Database();

			if( _theNorthwindScopeProvider.myScope == null )
				_theNorthwindScopeProvider.myScope = GetNewObjectScope();

			return _theNorthwindScopeProvider.myScope;
		}

		/// <summary>
		/// Returns the new instance of ObjectScope for the application.
		/// </summary>
		/// <returns>Instance of IObjectScope.</returns>
		/// <remarks></remarks>
		static public IObjectScope GetNewObjectScope()
		{
			Database db = Database();

			IObjectScope newScope = db.GetObjectScope();
			return newScope;
		}
        ///// <summary>
		///// Returns the new instance of the ObjectScope using the HttpContext aproach described in the best practices articles.
		///// </summary>
		///// <returns>Instance of IObjectScope.</returns>
		///// <remarks></remarks> 
        //public static IObjectScope GetPerRequestScope(HttpContext context) 
        //{ 
        //    string key = HttpContext.Current.GetHashCode().ToString("x") + Thread.CurrentContext.ContextID.ToString(); 
        //    IObjectScope scope; 
        //    if (context == null) 
        //    { 
        //        scope = NorthwindScopeProvider.GetNewObjectScope(); 
        //    } 
        //    else 
        //    { 
        //        scope = (IObjectScope)context.Items[key]; 
        //        if (scope == null) 
        //        { 
        //            scope = NorthwindScopeProvider.GetNewObjectScope(); 
        //            context.Items[key] = scope; 
        //        } 
        //    } 
        //    return scope; 
        //}  
	}
}
