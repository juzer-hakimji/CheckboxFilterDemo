using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CheckboxFilterDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet("GetMobileData")]
        public IActionResult GetMobileData()
        {
            return Ok(new
            {
                Brands = new[]
                            {
                                new {  BrandName = "Samsung", Checked = false },
                                new {  BrandName = "Apple" , Checked = false},
                                new {  BrandName = "Oppo" , Checked = false}
                            },
                OperatingSystems = new[]
                            {
                                new { OSName = "IOS" , Checked = false},
                                new { OSName = "Android" , Checked = false}
                            },
                NetworkTypes = new[]
                            {
                                new { NetworkType = "2G", Checked = false},
                                new { NetworkType = "3G", Checked = false},
                                new { NetworkType = "4G", Checked = false}
                            },
                MobileList = new[]
                            {
                                new { price = 25000, Name = "Samsung galaxy Note",BrandName = "Samsung",OSName = "Android", NetworkType = "4G" },
                                new { price = 30000, Name = "Apple Iphone 6",BrandName = "Apple",OSName = "IOS", NetworkType = "3G" },
                                new { price = 20000, Name = "Oppo Max",BrandName = "Oppo",OSName = "Android", NetworkType = "2G" },
                                new { price = 40000, Name = "Oppo Full",BrandName = "Oppo",OSName = "Android", NetworkType = "3G" },
                                new { price = 50000, Name = "Oppo Switch",BrandName = "Oppo",OSName = "Android", NetworkType = "4G" },
                                new { price = 40000, Name = "Apple Iphone 7",BrandName = "Apple",OSName = "IOS", NetworkType = "4G" },
                                new { price = 35000, Name = "Samsung galaxy s",BrandName = "Samsung",OSName = "Android", NetworkType = "3G" },
                                new { price = 10000, Name = "Samsung galaxy o",BrandName = "Samsung",OSName = "Android", NetworkType = "2G" }
                            }
            });
        }
    }
}
