using Microsoft.AspNetCore.Mvc;

namespace Trinity_MVC.Controllers
{
    public class Pages : Controller
    {
        public IActionResult Services()
        {
            return View();
        }
    }
}
