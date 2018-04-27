-- phpMyAdmin SQL Dump
-- version 4.6.4deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 22, 2018 at 02:31 PM
-- Server version: 5.7.18-0ubuntu0.16.10.1
-- PHP Version: 7.0.18-0ubuntu0.16.10.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `krew`
--

-- --------------------------------------------------------

--
-- Table structure for table `AccessToken`
--

CREATE TABLE `AccessToken` (
  `id` varchar(255) NOT NULL,
  `ttl` int(11) DEFAULT NULL,
  `scopes` text,
  `created` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `AccessToken`
--

INSERT INTO `AccessToken` (`id`, `ttl`, `scopes`, `created`, `userId`) VALUES
('04Y6c52VBLEwdEe5GMrLqHpbu616BIBDjFjJgU2A5LzrdQlSwQPBtYasDR078CHL', 1209600, NULL, '2018-03-16 06:30:53', 8),
('0jd5DCczdYdBsCnfPC1gClXQe0671T5eVfMa5mDxbzMCnA5AFWnvS7K0kFvFwA3y', 900, NULL, '2018-02-13 07:01:28', 5),
('0xMMsjr0THp9RDoOPlCPIyCLcqsoAfpzcM6eQkb0CyUVh1dT4PYeABxEBvuyvmBh', 1209600, NULL, '2018-03-14 07:12:45', 8),
('13JNRI8PFiytbRERPlkcF5kzNmbGrZsArZDvjDC6Kp3rgGVVPWVXn0OqafnRQfM8', 1209600, NULL, '2018-03-06 10:16:20', 8),
('1AkxN2IHr83CoBhMESCjovnYxtR6QVHbwrQyAaX9vDmTqYD3rjnk8DTzoTUER7PL', 1209600, NULL, '2018-03-16 05:28:13', 19),
('1pfxb44fhMttrGKaGSl4lRq5bZnPXXpnn1bWRhiYTotR3h5AUTVkt2rOJFBQdW1N', 1209600, NULL, '2018-03-19 10:18:02', 8),
('1TvuQoMpvfv9gyVQe7OCUYb28xxbJ96zmKGrFsfCQxiL7LAWXeTAJ8X42FgLNEcs', 1209600, NULL, '2018-03-20 13:47:04', 19),
('233I7afmjTFyqpMVxrfya73b1a1427vJhs9Ml1N4uDUwX56HDErQFImoBXBbKynL', 1209600, NULL, '2018-03-16 06:38:11', 19),
('2TYrkoDC7lLWwQSKMhSX096D0HtgpQrS92vdFkZcNu8ybQbyM0ybElBKfIjweWfu', 1209600, NULL, '2018-03-16 11:45:20', 8),
('3AOluLgTEjdEFqC5ZfqbqcgYxBQF7pkX0yPC9aL4rifLAwMAAC4I3BQWqDhyfFRA', 900, NULL, '2018-02-12 14:00:16', 16),
('3rFjkbXqnDA165COn2iHXJrcfXdWBfO9jmsNgMWY926bjxerr13ifT027wFqO6av', 1209600, NULL, '2018-03-16 08:47:19', 8),
('3RyPXkAjt1voMUlfUrBLvwOqWCkNFYZdCoIJv1hasEpdfVU9TMQOPdbf4W9xWXTH', 1209600, NULL, '2018-03-16 07:02:29', 19),
('3SED5yPdEsTh8T4Vy0LHdUuvbcv4yNn1Ecxq6x09xJOFDUh4HD9oxb53dLyLKS8O', 1209600, NULL, '2018-03-21 04:34:32', 19),
('3TcrUE6XySo8TKbpPbKIqiIRiawQUIgiRGPABiBpJXzGobws2dcf0opVLqSfjLyT', 1209600, NULL, '2018-03-20 05:15:15', 6),
('4oyBTYHg128zbeSPXEYFFydEh91W2BZ5xXT6NcZswg8t6iO5KhvbNDTinxKkzoTS', 1209600, NULL, '2018-03-07 10:14:55', 19),
('4pK7p7lv8nG847DJjGz4MvqFSB0M4E0Zw4sA44mjcCpGmROITsqnJnFwvFcZrBmK', 1209600, NULL, '2018-03-07 04:56:20', 8),
('5w3gxU6PFsDWo96Gs9cel4bseC3rK6bG6kUFmV3EWbkBWjOCB6d8IlMurNBNwtei', 1209600, NULL, '2018-02-12 07:03:42', 1),
('64oROhyH0BSKByNXL0JOINMUIwsbrEep5v4sAzwNeDaOXVempqnVSZH42c3BljiU', 1209600, NULL, '2018-03-16 11:54:47', 7),
('6WNExYRVBhWS8pJShZEhcxvjoF8dEG8HQC7Ubt9tld3ZXmxaM3nruqwGFTLYfo5j', 1209600, NULL, '2018-03-14 08:52:32', 8),
('7CvAQkgWU3SdN6LlpLaOhNg1qOErCrzhm3UWwjEyhgFZqM52FKMfgCQjf7kcCKlG', 1209600, NULL, '2018-02-13 05:27:18', 19),
('7G7nOZVJyjOmxcgfE8JXppRXwOpgr4SP6Fod8xqEPsyVjU58yCnRO8ZbkN98cNlv', 1209600, NULL, '2018-02-13 05:22:47', 19),
('7lnaAIM9TOlqaM8qn2gWQb9YMPrRP4sguPuCbcyEgpvaoWBsD6LLv5hopMZejzSr', 1209600, NULL, '2018-03-20 10:55:33', 19),
('7TYw5JMn6HmO5y3xiSfN8Hb6zCO1sNDlVu05ziWPtQolPd8Hs4m3umYxyrC7Pwui', 900, NULL, '2018-02-13 05:13:23', 7),
('7vf6GFN26FuRlpoLDH0CjCMNX4wteLOJeIphSJNLTalRQmODu3F4UEGdz5K7Cej1', 1209600, NULL, '2018-03-21 08:48:31', 19),
('82Twa02gjbColGTdPfudxYCgv2Jh40JFZyB2403TLkNScP9NaTCGZR71snbX00t1', 1209600, NULL, '2018-03-21 05:09:44', 19),
('8ahPmz0emF754F4ghboy4lJ37PDmXaandeiSwrzdvFIxIYysBV0CP0i7HlDgP5Nj', 1209600, NULL, '2018-03-16 10:58:40', 19),
('8fsdhAy6lE7CRkdmxga5VKPyJFA8ag0xiRV3TUBbbeTceO4ZheGqODuioRgkwWQI', 1209600, NULL, '2018-03-16 09:48:56', 25),
('8QxcV6z96IVISjBOd9vhiULlYDwFyXj0MaHUSWzjZzZhiVxV9Z2hc7tVRaZdT4VX', 1209600, NULL, '2018-02-13 07:10:29', 7),
('8u2HfbkEIRmRrgEAZuI9ySZrsXwLXOBacAWqdPuUBWUvbOAyOt7QZWS3coOCJeBK', 1209600, NULL, '2018-03-22 04:34:01', 19),
('90rqDnOLUDc7a986XKHX1OIF4R7k62XjqkKCsubsg28B0fE7ocyCWZE9kMPLfCVh', 1209600, NULL, '2018-03-09 11:27:23', 19),
('9OwHml9wvGwRFdHIMmjM75FJgSZ1ScT8cwM3S6nfgvU752QcNLDKVjU3LWtlo9Bu', 1209600, NULL, '2018-03-08 09:22:26', 19),
('9UHdE8I9V4lg3mIsB9tSRRwSN2LJyfBveY7BZSWJQ2LuXsYwPlwJgGFZjCkv9GId', 1209600, NULL, '2018-03-19 05:44:05', 8),
('9wJeLKvEQRGnbocj9C4cFyL6BYdfpLtoj0PmUYCE9uKn9nZemj5zrFxEJOBfGVUP', 900, NULL, '2018-03-20 05:39:51', 19),
('a49oaTXDZ709FVxbYlpsrKkpYJFYWgeSsB2rOLqtx2mDF9a6ANlFAoTy67RyxtSw', 900, NULL, '2018-02-12 14:01:15', 16),
('a9BeMf6gK7XdFYrSqFwxAo5buDpwenGRsRBKIVa4sBcUYQC9XDfB9n2aHoD1sNBt', 1209600, NULL, '2018-02-13 12:01:20', 8),
('AbA0F9WnYVBxKjJ47ZSfSs26ptTn2XCiAn2dYDk2rjhN13nSxdsTaJXRw7r5ME28', 900, NULL, '2018-02-12 07:15:14', 1),
('AErRCeRYKn1UKflLcS0Ay7S78ZZvOl16eUDagRIPvEKXbrwcDVCScXDwX0S2XTZu', 1209600, NULL, '2018-03-16 13:05:55', 8),
('AMU4FjcfmICxGqrUGb9w8djzu1SuTNqwJTr6CvG1uurq5QDAS0jVwliGRqdhjxgo', 1209600, NULL, '2018-03-21 04:54:04', 19),
('aPy23MKtKs7VbtopBTTHjzKgZUSpnh7vNX1GRBjiFiuWiWnlRkDdlHuPLndmQVg9', 1209600, NULL, '2018-02-12 07:08:31', 1),
('AQA4FJXXSQDx6AATseQMp8BtC4CcJVsXlABjQrjFFckYlzyZgJsZtLpvkk8TdS74', 1209600, NULL, '2018-02-23 14:05:05', 19),
('Ar9YmrfmaPNJ0JeEqsdQ8e7RfOdBLgwMFVDR33IcKHKslnHFvKBg8nKE6S0w5CqT', 1209600, NULL, '2018-03-13 05:50:28', 6),
('AvrsDjPUk3d0z1PAvoSfSQA5LCToKB788afseRdafg2J5dCgWAyG2ENXAlupjyuN', 1209600, NULL, '2018-03-16 11:40:51', 19),
('ay4SQjQjLmJcDclXAPQZKZjDgWuIJZ4ZQEjMAJIlrfiycEQ5vu330OdmtV1gYmUY', 1209600, NULL, '2018-03-09 11:30:56', 24),
('B8hEtmm8PQwdCD6BU16dDVg64iNiTuvV4pwgINv22I7rVr7uKjeRB5if28rz7W6b', 1209600, NULL, '2018-03-20 15:14:02', 19),
('BnPtzT9251pirLtFKMm1jUCAFbXqBfxQnRBT2VEgnaPRCgMPPP9NlbjAvz7ravzI', 1209600, NULL, '2018-03-20 14:31:53', 19),
('bT7H6vBC7dwC2hcHMxXn86YQKmXgtasko9daOEjfT5LBN5KmT52G8c45kJ0lBM8g', 1209600, NULL, '2018-03-20 13:02:15', 19),
('btbEO7w1DD3y9wAS81JlnmB9AlhwVNNHB9pKz73uCBOnEs4dN2tGq3J3jGCVoI6b', 1209600, NULL, '2018-02-27 09:54:32', 19),
('BtvPIoGs0HiWRP1MfZSUcYgWix4QiTY10zvzVMOFcW911qAE4A6E5PV0DrNJyikI', 1209600, NULL, '2018-03-20 10:38:13', 8),
('bTYFp2iNH9sXF0zKBYbTImQCBJLpgfJq3IM9R9H7AawDO7VncdCChxiH2moRS7YL', 1209600, NULL, '2018-03-15 10:30:43', 19),
('BuZwidqlIlGyin9rJEVARFlGWWCmlqtFYwy4jXHOzluaESdBrUigur9DPtB9ndye', 1209600, NULL, '2018-02-23 13:30:08', 23),
('cjmKUlTBLQMAOfr7SRhQGrS0ozaPeNftIL5eTMFQ0WL5TpF9KWzd2GSisxYHGHCV', 1209600, NULL, '2018-03-16 09:20:56', 25),
('cK3u5OMnib720pOT7OSFnhTNahVBV75935lxCYtQw57Seoswi42c5XCrsx5ArQQ4', 1209600, NULL, '2018-03-14 07:54:48', 8),
('CKKklyTOWgDsXpfY9SYi2FDCrnbUd3MYQ0gqKdn9zs3Bw5myT2gAQo0LxCCIYHN2', 1209600, NULL, '2018-03-20 04:44:18', 19),
('Cld1YyzJfEVgdLDFP8HGGSA7GF7PziRlLDggin2VKF6C5kIs90YRfRWd7lvSqzNV', 1209600, NULL, '2018-03-15 13:32:44', 19),
('d4Ydu5az3i5Y9HT9Jvc1rxhtpfB84cxhFc1oFhPwau9JQBFRIKFQpk5CkLyOcABe', 1209600, NULL, '2018-03-22 07:50:20', 19),
('DAJESD87BybfRtngsEd6Mlr2q6qTjlRRD7HeRa08slQYE86xCzEghmlXv0FDfCqP', 1209600, NULL, '2018-03-15 05:08:08', 8),
('dH8NSWuCUVYEKOEVIgXDmU7NkDmNA62t7OMWnXaFEWyRl6XcRW1T7BzFK5cF31Uv', 1209600, NULL, '2018-03-16 13:07:24', 8),
('diPBPLlz8DDeWVjfIvD0FsCE0a7SIMRDeFpiaHmtHOl0IvYRPSvlSACPY9uzMTK3', 1209600, NULL, '2018-02-26 09:48:21', 2),
('DjsW5WtrZAUW342nzUu6RBMWJMjB3AkPqfpNuH5j6BKygCnbuqjtznBd4rtZR8XC', 1209600, NULL, '2018-03-20 11:26:13', 8),
('dKg0DLH2TtRn9NftPCPaX7Cm5dGbtyd9S8wrglydUOlo185bpE31GRFlEE1xRSq2', 900, NULL, '2018-02-12 15:17:44', 3),
('dnL5mcdntMl6eHoAeMgi1BGzksKB0Q5hCGvO6tgUI6ueSN0nuvb1hXXo77OnvABf', 1209600, NULL, '2018-03-19 08:35:39', 6),
('dqzi84gUxZeryKA6WekXQVCLE2wHgo5NqUO1eOTcH8V5x0FU10vDFCQNAJvGsXLu', 1209600, NULL, '2018-02-13 12:01:20', 8),
('E4H8ZPjUDShPvbcWSFy7Od1xdrQ5WBLdbwoK4aaklbCkhp1cAs4bEMhVPSy0F5ia', 1209600, NULL, '2018-03-20 08:45:10', 19),
('E4KzTXGS1ANGoZzplcHWviM553xwIWw0ucrRNPM6vWqMlnBSeMwDBtotRvGfoVvq', 1209600, NULL, '2018-03-16 09:25:31', 8),
('EfTeT4DzEX8ZR6n4krPJyWLVYncN18cpfpnZFJB5Pkoyvkdl0673lQgcTeHrwRyE', 1209600, NULL, '2018-03-14 05:09:28', 8),
('EiBnGMil4CJFOCaV1603wAUXBMHUdATCOMjCvPnpTfRR00ufVOlcykNFMMlZ2K8n', 1209600, NULL, '2018-02-20 15:30:56', 23),
('ElQhl2PX3CI1pMREKHrUibob5ofRG8PVPtDpKkXjpl9nRSK3Cw3yPlfxopoJDObH', 1209600, NULL, '2018-02-23 13:10:14', 23),
('enPkeJyrF4QvR55J19VxrWXz0MPzCp5nMokHxzeMpSCcEDXvOyYoVAkubs2vAZhJ', 1209600, NULL, '2018-03-07 10:05:28', 8),
('eOXeOFtxbD6CDnON9jJaeW8IxE88YtEONsh17n3vi10RCFfDCNdNZ1AndclfRTQ1', 1209600, NULL, '2018-03-20 06:48:55', 19),
('eRAAbH4kGC2y5Xnf0HN2gBrWbNWer37RTTjD4YCIHgrwpEsf4sHHZaXjyVKbGHc8', 1209600, NULL, '2018-03-20 10:27:18', 19),
('ESDaJQfT0SBpbaLlVDrcnxWE6fucdAojbIoGusuEtO0TkxVxRfmjWJQRGmFH2Sjl', 1209600, NULL, '2018-02-26 11:33:32', 2),
('F0DHJTxWjQlsATlDjCgcl4uj7d47hqmRYTQDkquS79dQxmOLtInDugj9WKC1EfmA', 1209600, NULL, '2018-03-16 11:51:27', 8),
('F2o0wwpXxCBhLRyyzcDyJSyIhvaIOuX8GfChVpznDGHPgU7UZpLZyFxFWhHJfN9K', 1209600, NULL, '2018-03-16 04:55:02', 19),
('f5rKCynjdBsJIygbwDpyknfDsDVzUVOefAq1hhwm7wKPqkHAuyj7azOTJch7obuU', 1209600, NULL, '2018-03-20 05:43:17', 19),
('Fdpc7AePG7nQRqOR0OUdXPo0VnHYU1As78CQtyX8wHYqbaG2HqDTmtI8mhsJUXvT', 1209600, NULL, '2018-03-05 13:17:53', 10),
('FGwQCzu04RIstS4IPFjE6pfopbu94V21lFTtMDvnJbA6eBGQoHA8OyTVGo6fDXZN', 1209600, NULL, '2018-03-16 10:48:34', 19),
('fJY5XfGeQm0cAhBAb8WtjNxYpuREEIhEL8AqG3jI0NMN4hGkwSyMLcDaWED895pk', 1209600, NULL, '2018-03-19 10:32:21', 6),
('FmBcKk86xH7bARD84jzjbsHFCGXfAyzlcAGQVOmMJN9JCeT4FUfKEChutMTgAQ1i', 1209600, NULL, '2018-03-19 09:08:15', 8),
('FoZlnICQBkpFAAVekzRIZCexyNKNjPFxUPaYWq6jgoEYarQ5IqMsaXWALKolVHbB', 1209600, NULL, '2018-03-21 10:58:49', 19),
('g88ciLYWtAkiHLVPoMzW3mDSzFdvu0lP8vEc3TDYBkBSETH7b4HQHV3UWyA7A1al', 1209600, NULL, '2018-03-20 06:13:49', 19),
('g9U58pMARS20nFLN0oh04IH8F97DbNFKdYpxWxwFIK9WPgw85HejhdPMfbxKXBdr', 1209600, NULL, '2018-03-21 13:14:36', 19),
('Gi3JcOv5pUqilpbv1BVg6ODDowUCtT1bgwsGx9ujzhb5yGkIrMWdKjOBmwBujQEq', 1209600, NULL, '2018-03-21 14:06:55', 19),
('gJh2VAX9klLpXsBVKddWLIjkRC3pyXmo0DmOmg8l83QfVaECkhHqkBf7hmL6V2cN', 1209600, NULL, '2018-03-13 09:47:30', 19),
('gU5O6QrCNuRDwLnlNRrBcE3aNrIcMRUtRPQnflIFDIqCd9y0lrIGREGUSeBgQb3S', 1209600, NULL, '2018-03-13 09:48:30', 6),
('gUi8XtjocsiwU3e3wuv7n0XNCdAnYAgMMKUGvolazHx4Ec72wuqSYBABiK68wX08', 1209600, NULL, '2018-02-13 10:19:25', 8),
('GXrmbS419pRk5AAj3d8wi1F1RKij74kfSJouLC7KNKi8GHZIbBEvHkGqL3zeQO8l', 1209600, NULL, '2018-03-14 07:10:35', 6),
('h7kEat2dvUvICCqFwb08Xpq3X72upIZCJcQoTGoBUVRyPp1djaFUKaOnpkZzWrsj', 1209600, NULL, '2018-03-16 10:19:02', 19),
('HeSm1NurSEqfA8fGutHpWEN8HlnFDeRuuRNDaLv7scWPwEyH501kdkbqLZHZL8ex', 1209600, NULL, '2018-02-20 15:26:37', 22),
('HsOr3HPOL6japIz7jtNMIPqWUvpdEjElsegCqYH21A1WUHIcT5GjIs7lbCQxJMQR', 1209600, NULL, '2018-02-13 09:41:51', 19),
('HUEofbiowpzBtgU6tXI0mC3iqw4qOGyoE1TGqiPGpd90x1DbL3qmxNb9DX3GB94s', 1209600, NULL, '2018-03-21 06:06:11', 8),
('HxkOpCPFi7UTWhTb1pOPeWNP5iL55VfBZWn1WlevooxnbJMLdwtnXzdTQdlVowFa', 1209600, NULL, '2018-03-20 14:56:46', 19),
('i9QAtOLbFuSVzsxMW2tQHub2m4BCjevOOfbhG0qIpds1n1f5q0F72FDrHBmpXsG5', 1209600, NULL, '2018-02-26 05:53:40', 19),
('IGOC2RhDXHoHH6iWbN6k6Y5YxAZWh5cCUUGwoGIKBziH3dHW1QLosK2tFaGUltPg', 1209600, NULL, '2018-03-19 10:29:30', 19),
('IMtiDVxFqoMpO78ipuzoEQP2SJPFUZCWXtLoByMqzedtzlVonngARPjh3M2U1j8T', 1209600, NULL, '2018-03-20 05:47:21', 19),
('ioSjreB0pYI1Cqx7YizWLBgegftyduPo3zzKCrxzjUcDVZH33C6e7Tatgv1Ggm8B', 900, NULL, '2018-02-12 16:25:32', 6),
('iwILRqa6gGGfdyHuAwG7SROUODVxb93rfkBqBG8RTShQ9CxeJOBdoFRE7PkzYySY', 1209600, NULL, '2018-02-13 05:35:35', 7),
('JAJE7Aw25J2EeKCrypAtdWsJ1RWafBiiLsMNjeyAnDbhTLbCGAAbef9eOlA53Xsl', 1209600, NULL, '2018-03-14 06:45:52', 6),
('jeIs55nmP0UsG8HJoA4xeru6IiN3WW3LFDFH0y3UvFrA33lHsmc4WChOBlLRDnRQ', 1209600, NULL, '2018-02-12 07:12:38', 1),
('JFd2pmF6sbmD9zh2m5iZ30ZD6snE2lnxlIsvEpNMd9cYBKArBaBtE9wq96w8pX4c', 1209600, NULL, '2018-02-13 12:03:40', 8),
('JFWecDxn8HnWEBBkysba5Pvy6kiEG7KG3iGUXOKV6VDDuVPrVQbqNHRtNheCPhEe', 1209600, NULL, '2018-03-16 08:48:00', 19),
('JhG4ziv44SkfzEwEpyz3CtwL95rMm2b6cov7JFzByY6KA8NKODHYswAwFInvqmeQ', 1209600, NULL, '2018-02-13 04:52:16', 19),
('JlGEC3nPQphfRwRrA2Tp69PFZlNGVJJ94LwuNMYAj51YziczvhWLI0XmhIayU8gH', 1209600, NULL, '2018-02-27 06:49:26', 2),
('jRo9jGhcvGxMeLFm73HCHdXE83irNtTod2wtCNH12NQHup1KNEB2vVRCKSfNCriw', 1209600, NULL, '2018-03-22 07:46:31', 19),
('JVE8xe3E1jrW8hpj7KcyNUEUgkfpsnCHAIl0wJpmr6M09btonx1t17vEfoKfxzD6', 1209600, NULL, '2018-02-23 14:05:05', 19),
('JzO1dWawdryuNG6em3gNrUfgiWMztxxVu4XUngS0vBqU3whkEE9g0m82DURHcsDk', 1209600, NULL, '2018-03-19 13:30:46', 19),
('k6HVDE7bR47ldbEsGVATm0at2yk8YBFHiNleHvwJaEIpB5Re0gCFEf3LoYaA3QZw', 1209600, NULL, '2018-03-16 10:36:03', 19),
('K71oUt9zjUsdAgB8wsXd3WU8QweAiGXgJS8AfgpIrvO1ULm3BmLcgFQ9dW6YIDhT', 1209600, NULL, '2018-03-20 09:17:48', 19),
('kLBkDp9pzVzCFg95s7h41duM6WGOCOFGXL1JHOBeMqlXVsunEbagDycUYlF6HvrD', 1209600, NULL, '2018-03-16 11:30:09', 19),
('KM5ehbIUGAPR2jeQoArggi2uPDzynBzxYBxcBaO6frcwvdzWqHdcN7JC8zGstDb1', 1209600, NULL, '2018-02-13 11:06:58', 8),
('KpkFD1SjBISFlh4pEaQ6sN1G6VQZMeCBM9qPF0G5geBc4FRzVp67uXea1pKacxM6', 900, NULL, '2018-03-20 05:45:49', 19),
('Ku2DMKMj7EW1BuqWGUQy6eGydBT3hENufsYRwnm3z0sjFeRogeuip6wlLr5Rqrtd', 1209600, NULL, '2018-02-13 09:35:10', 7),
('L2DHucfUAz6MopUVzCro25kQHWRdYuBhXieS2GHfZoloNuqW59nBPyJGlFs4OWbl', 1209600, NULL, '2018-03-16 11:27:22', 8),
('lXMdIOiVdNQWPlr6f1lXAuU0IDTX9ViYxS2vThIlusNORvguGMGdXOaRBQyvmolH', 1209600, NULL, '2018-02-13 09:43:47', 19),
('M1HRmBJWBgpxbWXk3jzQ8r6WIqT0JK2A449WesGutCbD8yVLatKpCG7jX3QBy59W', 1209600, NULL, '2018-02-13 12:01:20', 8),
('M7HO3M5vWXO9cQxEFh78CPynnsSEWRZtOheWTMpTDx4w6gSfBLRE4gRCCQ4SPCbh', 1209600, NULL, '2018-03-14 05:01:13', 8),
('mmkanI1EDGER3L6wAfDwWThwai9sRqSJIskOWrYeQI2KjGdnbkMZUtG94nuUxRjq', 1209600, NULL, '2018-03-20 05:22:49', 19),
('mnvd5XQtNBkBlt6sWCrnNI4tfQfbdh06wA41Ga8f06c6N3NGtXFoBFfsqBlOdiVV', 1209600, NULL, '2018-03-16 09:57:21', 19),
('MU09aBexHhIvdYxDIf3pnULT6xU3BeECjwoGqhT1gtpYIMuAUJX2ITXFou6Zp1WX', 900, NULL, '2018-02-14 07:49:53', 15),
('MUy5dIq94J95TSRgiyG3eZZFugZhOYxSH5UbJ45HkCRpeQ1rgIyGNkTq9j2iGUWc', 1209600, NULL, '2018-03-14 11:21:48', 19),
('mZHTzjGJlARpXIWC2FCyfEbpEmlHNtfN4x0XDbFZz37SFPi37UspC6QVCxOpS2Z6', 1209600, NULL, '2018-02-13 09:45:57', 8),
('n3lHRPy9QmCI51AcPIYjZN6IcqCk1Zl272pXH1dsLXFiMHHR3WGdMDcu4aqAOpAD', 1209600, NULL, '2018-02-26 06:35:26', 2),
('n54yf3ku1wo10tuP5ITuEWoeme4nsyTTrVJdJ76bOPhRHceFpHWvRXAQ54JfDlT5', 1209600, NULL, '2018-03-16 12:57:00', 8),
('N5wiq9SF6aGpgZZKBffGWKHDhuAnmfZ4WFwwyfQgBWupNwXJtmuCeZ3KWBS1icWE', 1209600, NULL, '2018-02-13 11:16:03', 8),
('nCBUrWG0OzZ6ge8tgKyqU3IwkCH4tCMSLAhP9rM7W7FOU5ngdcCFVzMOIrCNVXYF', 1209600, NULL, '2018-03-16 05:15:23', 1),
('nD2eJkovhBmhUIf9930KEcRjugv0yvtzeJmUfWPsqaRxk451PkDdGEuEpRyg6vQe', 1209600, NULL, '2018-02-13 10:58:59', 8),
('ngS9C2GiZtBQqXjg07uA0xJJt910ZbdNc5d2Rz1Q1PCE9xSPdmVUmr1rEhRnFreg', 1209600, NULL, '2018-03-05 09:12:03', 8),
('nhvS03sk54ZnXcCVBzeLAnVVJaWMi2Nfx4JGmc9ida7oCWRY6TDerHIW3qeH0Y6O', 1209600, NULL, '2018-02-13 07:03:09', 5),
('NlEmFf8oNBtBCWFIzdz6I0LCuc413TUUrqqNBlqAoeSR2lPabFScIrqf6sTsnCAo', 1209600, NULL, '2018-03-16 11:23:02', 8),
('O30T6JUEND5cfLjIQlsrfCXrCvrMHikmqWoambYbOVX2LdailZXI1ivAhg3qSWot', 900, NULL, '2018-02-12 16:51:14', 6),
('o9PH3BDCyyKlNb9NalhzJVcjUxCpXVmyEnq2r9MSY8PreBfPHX7g37CSgwbrnoVj', 1209600, NULL, '2018-02-28 06:04:27', 2),
('OaIlzf9IKFBC78zq32eL0ibT35Ykzipjy3COUPJrKrXNqgGmkDunAUDU3Pv8al0j', 1209600, NULL, '2018-03-20 07:30:45', 19),
('OWs6QYgIxElQx91lXr6VvAdMr9s2eN3S5HqmWgU4Ipq5NFclBGakccaUdSStIxk1', 1209600, NULL, '2018-03-22 05:49:57', 26),
('oz4eDwaRVbofwSGSvAGYAgAogm7mjkhknzL7SblzEtG1Yr5Mhfz9FGN16Rgnn6yy', 1209600, NULL, '2018-03-20 13:11:56', 19),
('oZT0cyepMHINare6fKrq68rdo3C640DZyhHysURktuYXZlFXg86BFlp1ZLf8DwwY', 1209600, NULL, '2018-03-16 12:06:48', 8),
('P3LmbKsosmDPKfqdF2kd3ClNzxS5TKCH23F2EMcBPqTNtzPNZJ3AeldVF1pSAPvc', 1209600, NULL, '2018-02-13 05:06:19', 7),
('PAxnw4K9oQ25bggbUM2nswQPf4Ki8p30CTXfHqaL4dh8HO6vAUB7GYFl8wMNKHy0', 1209600, NULL, '2018-02-13 10:08:27', 8),
('pCdxhVs0AgTbbSnqNay6loC34WqK630pcDgQIvryzDhB4oFibpMroKEG12nubwDL', 1209600, NULL, '2018-03-20 07:46:30', 19),
('pHbeXdY2GkLMmiptM6NScQCyeM8K0yGWZdJUZsTpzDiVU2k0yAM7XSNRqlO1nHFg', 1209600, NULL, '2018-03-16 07:27:36', 8),
('PkAGgnMBDbqKBLN6dIOCOdCmChpRo3GXmsAddtUO63wNjevLthnjFOQoV9l0xKm9', 1209600, NULL, '2018-02-27 07:17:33', 2),
('Ply4JoVfvGqAMqszwAI3hdEU5FAILMbLvME5Bd2VVAk2vJlSYtzwhL05EWtVRP49', 1209600, NULL, '2018-03-16 06:02:27', 19),
('PnKWJobr1sotoKhykTvmCLZWJu4lmSkGnQ8yBN97fCFvAEIDjy5DwK8y4XEAmt4D', 900, NULL, '2018-02-12 16:39:48', 6),
('pwhyCGGWLRrTyRcVJCIBzO4LCCA5qMorJ03r0uBH9JVTXRap3oaTGtxpynBo4feW', 1209600, NULL, '2018-03-20 14:57:46', 19),
('Q1LKYaTNYPpZBCO8oERyHWxWKojWFZUAs0JYJIjuZvrRq1w3NP1kGh1kxNUoBRql', 1209600, NULL, '2018-03-16 08:48:01', 19),
('qGMSz0ImFWmw33hhSma1ZIyMDGHHV9YSYMIOaD2kb649IGjAZUtwMQKh9CLaCuVw', 1209600, NULL, '2018-03-12 10:25:33', 6),
('R5rP0Mf3BFf7ohoNNbLEAcpHLAm5wzCt5FIP1B3bzAJiKG4WMBAjZ8glqnNn2dq9', 1209600, NULL, '2018-03-07 10:08:10', 19),
('RapNTQ0YQJgYLT84Vdz0J8E6jaP99qiK7Ewg111XaWkGwUcxiAlPCHFD4eJbaslJ', 1209600, NULL, '2018-03-22 06:00:53', 28),
('RcfPWqQeKttOnEgK5rbAxsF7ZdZ9JEFAQdh9M4Hmn2xmOQjWIJRRKR7tqAlQCxaa', 900, NULL, '2018-02-12 13:10:07', 15),
('rM51mF6gZA9cl9vY3ryoJoCvFRxmIY7MELv2pEUc6Nt2qUs0eBS4FMqDiGUBEYeH', 1209600, NULL, '2018-03-22 07:28:55', 6),
('rNuUD1ToCjLHWvXUEfEiT8LPAa8lEzYsNQPGkFrzMPSbnBzGgmcUZvU23b42yYta', 1209600, NULL, '2018-03-14 06:48:54', 8),
('RoelaOrikM1McUJKUj9rJK0FY92AG0JcH1wtId1Ly2GOVkCFk7QBS6N6yT2ysL2k', 1209600, NULL, '2018-02-23 13:26:11', 23),
('SzFgJRyTAjdHjfNrykDDiHGz1wZR5YpVvt3qjzrDF925bHIJ38vkCnUBzUoesssX', 900, NULL, '2018-02-12 16:53:11', 6),
('T3NUybAyPe7CFbQUQHUGFRdM3hge8qu8m15DNx4FbVh2wIYw24fvCqM7hsznrJLc', 1209600, NULL, '2018-02-23 09:25:09', 19),
('ThLn67gZVsWreLTFwlQAFbrSJQlNEtnkGCnXiKER16oY7cJGNvCgFxesZkkoRKBj', 1209600, NULL, '2018-03-19 05:15:45', 19),
('TKwAEyvQFAqnyBXJTEbUuqAo4pbuu8RU1R0g39Y0A4CnrgjMYJei233bFczE3eQT', 1209600, NULL, '2018-03-15 05:38:37', 6),
('tS4FteBWzJqtgYUmBaINr82ztXxxS3JzCXmYVjywfCBKFEvUGbA7voYvICmh0i2g', 1209600, NULL, '2018-02-13 12:05:37', 7),
('TuERtnOlJivLswdxpjb4DvHcIOd5YDDLmUb3MIJbpnGZE5ojRRanGBaJQps6UcdC', 900, NULL, '2018-02-12 16:36:22', 19),
('UG2ctulIWmZQyFWqpAVBSUh1xsfHyMlU52BDxB1j84NTmbLmcyc9EyznQzkAPK1J', 1209600, NULL, '2018-03-16 12:27:44', 8),
('ugWWbITEhRucML6BKvKzfcn6UACYdf7gEjSFJitVz3y93vPTiBDkG7BnhSHS5dE4', 1209600, NULL, '2018-03-16 11:56:17', 8),
('UhrIlRDYlbdfeECuMfIoHvd8uPHfH7DndCLam64RKtTaXI6STAH5mmChZ1x9u8dT', 1209600, NULL, '2018-03-14 06:00:34', 19),
('UJ0J4k3eNZELLuT6CtUGnrTcOF6CGTrLkSMwrHLMlfROa3GdXevHIyu9BUgpnytN', 1209600, NULL, '2018-03-16 09:17:37', 19),
('UKWZol39uGxgEmQABFV5JZo2rSu39wcBWoS4wbg00jOEfXtPaHhLr4zsalnbDIo6', 1209600, NULL, '2018-03-14 07:28:22', 19),
('UpvzNaMT7tyLbg8dilNLFCr0rTQ72sWZA3xbu09KNNm2FuG4qvVG1L7UuHvC83rt', 1209600, NULL, '2018-02-13 12:10:32', 7),
('UuFpEHP2AElEyFdzD47viY7X4O1WPkVKDb0a7CDRwKMUnTFkxTgLKHHgelSmkjhL', 1209600, NULL, '2018-03-12 06:38:34', 19),
('uwV6ocIONi7WAdeInGDqKdUv7fvWvdmURoRXm8fscv8AFXYoCmjhiVEHxGVmmSTy', 1209600, NULL, '2018-03-13 09:18:37', 19),
('uYuY5RRCD6SALAjT4i7SBsaKtwVoV2heF0GmzTjaBG9o95mylVZN09DCeNxuik3W', 1209600, NULL, '2018-03-16 04:39:38', 19),
('v3uQC4uDuHzJbDLisxOhAkB8feqEpazMIOdcXe8JOia739kXHIs7TGhGGscjf20S', 1209600, NULL, '2018-03-05 11:34:08', 8),
('v9cXKoXl4CKUGiqA98Eu3XcfcaDGlTBfgEGC0IA8RvkYiNSHtqlT1lg4f5IpGM9G', 900, NULL, '2018-02-12 07:24:06', 1),
('vctMow60JhOx3gfGDpPws15M9DrC5jCForsED2kgEbs9G6ffYtoGDDMWjiXivH7p', 1209600, NULL, '2018-02-12 13:11:54', 15),
('vHiROumdvxVz5dHfCcJpJ1UXv2QY2F42OxSQqwv4fzVDlVo5u8qb2TYciW3VoXnu', 1209600, NULL, '2018-03-16 09:57:23', 19),
('VJ91tBhEaepKowILR0Pc81Z08vrJr9ClHHSTYUPBNyhi6Bt3ZXDHYFRDliwrvAEb', 1209600, NULL, '2018-03-21 06:27:25', 19),
('VW1QZEBx8lLK3ky8wTxX9qOLOJBYyYIqy4gNoOlYop3O5kR1GWQxLS4ksU3G0EQc', 900, NULL, '2018-02-12 07:14:42', 1),
('wG1uwr9TfVajvEQ550Y3vsl1iOTvPw91WHLTyVwRhu9om6PFJJDD9rTmRQeAclhX', 1209600, NULL, '2018-03-16 13:26:29', 8),
('x0ukdXWTcQdFNdiA6EsNSgWoI7opASyKyaR0BPszGHvIuERIyuUN4yCHvp2UE0Nx', 1209600, NULL, '2018-03-20 11:00:44', 8),
('x2OILQbvQOTM20TpQzr3iqXzfBQ4InANPyJZX73XRSZRXPdddtQPoWusIylSrN6s', 1209600, NULL, '2018-03-20 10:24:42', 8),
('Xc4EFA8HJo7lrnZd4mVLhOg9sczzjOQE5dlB2pl5dWjyDHWm7iS5G70fgQvmzSvU', 900, NULL, '2018-02-12 15:18:07', 3),
('xi5096awWLndhbwBqYf6PSUwytZ0rNQ1OoM9m7VAkmdZcHBYHy5BXsFCt5hUHOBI', 1209600, NULL, '2018-03-20 07:54:27', 19),
('XMM9eYObiyDtoZeWOcdBwC3L0lQ49QCic8Z7BMLP7ADX3WEU6PX3i41n4Lk6omLf', 900, NULL, '2018-02-13 09:44:08', 8),
('XUe8X6B3z0IVXe1T8JorwajI0EOQE3qA4CjrrN05BXCwooZ2G0uwG1S6ZTlSRH2t', 1209600, NULL, '2018-03-22 05:57:23', 27),
('XUhoimikMBSjZluMiPeuUNmEE3ABhxDSJnnjuGCK7I9k1LM9v1vHzLDZgebMSuuh', 1209600, NULL, '2018-03-09 11:29:00', 19),
('Xz5tbdaphr6zvKuifamAybEOum4oC4J22mRiyM6VCB2Ie5t2olBwW5U5ISpMAP3D', 1209600, NULL, '2018-03-13 10:18:18', 19),
('YF7yHgxWr98ZX5BMK0767EdNXJtBZlXVFMjoOc4RIucbB4K9qkdlVzr3eyJV5HoJ', 1209600, NULL, '2018-03-12 10:20:12', 6),
('YH2bjvscDzwdup9hBpprKhc5XynGehH5IMC2Igdbn1vkJhmUzveAEiVmxMOowpCW', 1209600, NULL, '2018-03-15 11:30:08', 19),
('yiMvWqly542VnQzGP0m256Ja3Qv7SBmF1mNvIcbE1IxDoE5I4lSndLbhwvi9RpUn', 900, NULL, '2018-02-12 15:18:02', 3),
('yINyGtYi944hkDzNQCv2LVVqiMyETvXRpO3jb8SfG4FOGUGv5JT5xpJSY8dQ0fkQ', 1209600, NULL, '2018-03-16 13:36:27', 19),
('YRPkDucO5yag3PHnlkdg1hRBDRER4Ycj29TLp8MJDeHnuR1jekgVlOEQba0kinf2', 1209600, NULL, '2018-03-20 05:31:02', 6),
('YUSw2oBlS5Nxbl4gEQvJ2ht0VE4flEWJBbkHfrmaipeRXH2OxEFcE8c33efSAHnP', 900, NULL, '2018-02-12 07:13:52', 1),
('YxeHEW1Rh5A7c2apWTJcYkLnFPKi5EpteXZG5L26Z1O9AFaEbBbr4Ywx8ZKnaMIi', 900, NULL, '2018-02-12 16:33:45', 6),
('Z2BM8eVzBk9QVsnyndVy8OWzYXJUvJRkdVGwVVp797kE27QnvizfkmQt2ILKzijt', 1209600, NULL, '2018-02-20 15:30:36', 23),
('ZgvmZVj0ZtSLk9FdnkeOCw5zkU3ykeMlIOzyC1Dfr2FQlOPnKhrC8ZNkzmfIYLKt', 1209600, NULL, '2018-03-21 09:42:20', 19),
('ZKDXAzItH5O5HUdIPRsiuaUcK8N4WmGau5YF3vMcHEoxbFCVRRtr22llTGOuXZvb', 1209600, NULL, '2018-02-20 15:31:47', 23),
('zoSZTb0LNBhZMnHpQwQgpQjNWvaBcbVDk3HFj8Y8rwjaYVDo7Y84zD5FC0C1i84D', 1209600, NULL, '2018-03-16 07:00:13', 19);

-- --------------------------------------------------------

--
-- Table structure for table `ACL`
--

CREATE TABLE `ACL` (
  `id` int(11) NOT NULL,
  `model` varchar(512) DEFAULT NULL,
  `property` varchar(512) DEFAULT NULL,
  `accessType` varchar(512) DEFAULT NULL,
  `permission` varchar(512) DEFAULT NULL,
  `principalType` varchar(512) DEFAULT NULL,
  `principalId` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Admin`
--

CREATE TABLE `Admin` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `image` varchar(512) DEFAULT NULL,
  `phone` varchar(512) DEFAULT NULL,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Admin`
--

INSERT INTO `Admin` (`id`, `name`, `image`, `phone`, `realm`, `username`, `password`, `email`, `emailVerified`, `verificationToken`) VALUES
(1, 'Admin', '', '7898541250', '', 'admin', '$2a$10$ruNnUA47h.tFDWEcXKjQneF8ozKBB0zJHXZXw77WS0L5FCAHx7S6e', 'krishnendu@natitsolved.com', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Answer`
--

CREATE TABLE `Answer` (
  `id` int(11) NOT NULL,
  `title` varchar(512) DEFAULT NULL,
  `icon` varchar(512) DEFAULT NULL,
  `image` varchar(512) DEFAULT NULL,
  `option_price_impact` varchar(512) DEFAULT NULL,
  `price_impact` varchar(512) DEFAULT NULL,
  `option_time_impact` varchar(512) DEFAULT NULL,
  `time_impact` varchar(512) DEFAULT NULL,
  `parts` varchar(512) DEFAULT NULL,
  `scope` varchar(512) DEFAULT NULL,
  `questionId` int(11) DEFAULT NULL,
  `currencyId` int(11) DEFAULT NULL,
  `selected` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Answer`
--

INSERT INTO `Answer` (`id`, `title`, `icon`, `image`, `option_price_impact`, `price_impact`, `option_time_impact`, `time_impact`, `parts`, `scope`, `questionId`, `currencyId`, `selected`) VALUES
(19, '', '', '', 'Addition', '12', 'Addition', '15', '', '', 39, 3, NULL),
(20, '', '', '', 'Addition', '13', 'Addition', '13', '', '', 40, 3, NULL),
(21, '', '', '', 'Addition', '17', 'Addition', '15', '', '', 42, 3, NULL),
(22, '', '', '', 'Multiple', '15', 'Addition', '12', '', '', 44, 3, NULL),
(24, 'One', 'fa fa-home', NULL, 'Addition', '16', 'Addition', '', '', '', 41, 3, 0),
(25, 'Two', 'fa fa-home', NULL, 'Addition', '18', 'Addition', '12', 'part_price', 'global', 41, 3, 0),
(26, '', 'fa fa-home', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1521199052442_icon2.png', 'Multiple', '16', 'Addition', '13', '', '', 48, 3, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `CMS`
--

CREATE TABLE `CMS` (
  `id` int(11) NOT NULL,
  `title` varchar(512) NOT NULL,
  `content` varchar(512) NOT NULL,
  `slug` varchar(512) NOT NULL,
  `is_active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `CMS`
--

INSERT INTO `CMS` (`id`, `title`, `content`, `slug`, `is_active`) VALUES
(1, 'aboout us', '<p>lorem ipsum lorem</p>', 'aboout-us', 1),
(2, 'contact us', 'lorem ipsum', 'contact-us', 0),
(3, 'How it works', 'lorem ipsum ', 'how-it-works', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Currency`
--

CREATE TABLE `Currency` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `is_active` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Currency`
--

INSERT INTO `Currency` (`id`, `name`, `is_active`) VALUES
(1, 'INR', NULL),
(3, 'USD', NULL),
(4, 'fgjfj', 1),
(5, 'fgh', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `phone` varchar(512) DEFAULT NULL,
  `image` varchar(512) DEFAULT NULL,
  `location` point DEFAULT NULL,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `social_type` varchar(512) DEFAULT NULL,
  `social_id` varchar(512) DEFAULT NULL,
  `deviceToken` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Customer`
--

INSERT INTO `Customer` (`id`, `name`, `phone`, `image`, `location`, `realm`, `username`, `password`, `email`, `emailVerified`, `verificationToken`, `is_active`, `social_type`, `social_id`, `deviceToken`) VALUES
(1, 'suman samanta', '65478951', '', '\0\0\0\0\0\0\0/Ý$A6@ÍÌÌÌÌV@', '', 'suman', '$2a$10$ZelponBaHtNRY3SvVj3ldefAkJGupZo20xwloPpwCr39LCMRos7JK', 'suman@gmail.com', 0, NULL, 1, NULL, NULL, NULL),
(4, 'palash  saha', '987456767', '', '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', '', 'palash', '$2a$10$VHhJFw9FdAICvUCwmvl.j.zeJzvYfzXw.j031MgteEL1LRrCd5pQW', 'plash@gmail.comm', NULL, NULL, 1, NULL, NULL, NULL),
(16, 'Saikat Bala', '7894561230', NULL, NULL, NULL, NULL, '$2a$10$hJKXT2MvG6q1.FnVYznyDOMlbWwJQxmCMTXobwdzKWlmrfjBNR5uW', 'saikat@natitsolved.com', NULL, NULL, 1, NULL, NULL, NULL),
(19, 'anup chakrabortys', '568796669', 'https://homekrewbooking.s3.amazonaws.com/85230993_.png', NULL, NULL, NULL, '$2a$10$m91ZglJk6.0ACT.HKkq6VeH5kmDFBrL55kxl1RRAfaEsaJuZRG2X.', 'nits.anup@gmail.com', NULL, NULL, 1, NULL, NULL, NULL),
(23, 'Subhankar Ghosh', '', NULL, NULL, NULL, NULL, '$2a$10$cKrzv4kyxFITAUDN3pN4QOXIv1NbiFREbMfkNj04gT3.AkGGXiewq', 'nits.subhankarghosh@gmail.com', NULL, NULL, 1, NULL, NULL, NULL),
(27, 'Khalid Ansari', NULL, NULL, NULL, NULL, NULL, '$2a$10$D3jpbZHHdQjee/kl8PZKYOuRhs3Y16apxGaOTDrtSC.amVeicpnR6', 'khalidansari245@gmail.com', NULL, NULL, 1, 'facebook', '1718465448218689', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ExexutionMethod`
--

CREATE TABLE `ExexutionMethod` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ExexutionMethod`
--

INSERT INTO `ExexutionMethod` (`id`, `name`) VALUES
(1, 'Time Based'),
(2, 'Delivery/Fixed');

-- --------------------------------------------------------

--
-- Table structure for table `Faq`
--

CREATE TABLE `Faq` (
  `id` int(11) NOT NULL,
  `question` varchar(512) NOT NULL,
  `answer` varchar(512) NOT NULL,
  `is_active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Faq`
--

INSERT INTO `Faq` (`id`, `question`, `answer`, `is_active`) VALUES
(1, 'About the app', '<p>lorem ipsum loremf</p>', NULL),
(2, 'question', 'answer', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `IntroSlider`
--

CREATE TABLE `IntroSlider` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `type` varchar(512) NOT NULL,
  `image_url` varchar(512) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `IntroSlider`
--

INSERT INTO `IntroSlider` (`id`, `name`, `type`, `image_url`, `is_active`, `description`) VALUES
(1, 'lorem ipsum', 'User', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519816388650_splash-bg2.png', 1, 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.'),
(2, 'lorem ipsum', 'Worker', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519818004349_splash-bg2.png', 1, 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.'),
(3, 'lorem ipsum', 'Worker', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519816388650_splash-bg2.png', 1, 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.'),
(4, 'lorem ipsum', 'User', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519816388650_splash-bg2.png', 1, 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.hello'),
(5, 'lorem ipsum', 'User', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519816388650_splash-bg2.png', 1, 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.'),
(6, 'lorem ipsum', 'Worker', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519816388650_splash-bg2.png', 1, 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.');

-- --------------------------------------------------------

--
-- Table structure for table `Job`
--

CREATE TABLE `Job` (
  `id` int(11) NOT NULL,
  `job_time` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `customerId` int(11) DEFAULT NULL,
  `currencyId` int(11) DEFAULT NULL,
  `workerId` int(11) DEFAULT NULL,
  `zoneId` int(11) DEFAULT NULL,
  `serviceId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Job`
--

INSERT INTO `Job` (`id`, `job_time`, `price`, `customerId`, `currencyId`, `workerId`, `zoneId`, `serviceId`) VALUES
(1, NULL, NULL, NULL, NULL, 1, NULL, 1),
(2, NULL, NULL, NULL, NULL, 1, NULL, 3),
(3, NULL, NULL, NULL, NULL, 1, NULL, 3),
(4, NULL, NULL, NULL, NULL, 1, NULL, 3),
(5, NULL, NULL, NULL, NULL, 1, NULL, 3),
(6, NULL, NULL, NULL, NULL, 1, NULL, 3),
(7, NULL, NULL, NULL, NULL, 1, NULL, 3),
(8, NULL, NULL, NULL, NULL, 1, NULL, 3),
(9, NULL, NULL, NULL, NULL, 1, NULL, 3),
(10, NULL, NULL, NULL, NULL, 1, NULL, 3),
(11, NULL, NULL, NULL, NULL, 1, NULL, 3),
(12, NULL, NULL, NULL, NULL, 1, NULL, 3),
(13, NULL, NULL, NULL, NULL, 1, NULL, 3),
(14, NULL, NULL, NULL, NULL, 1, NULL, 3),
(15, NULL, NULL, NULL, NULL, 1, NULL, 3),
(16, NULL, NULL, NULL, NULL, 1, NULL, 3),
(17, NULL, NULL, NULL, NULL, 1, NULL, 3),
(18, NULL, NULL, NULL, NULL, 1, NULL, 3),
(19, NULL, NULL, NULL, NULL, 1, NULL, 3),
(20, NULL, NULL, NULL, NULL, 1, NULL, 3),
(21, NULL, NULL, NULL, NULL, 1, NULL, 3),
(22, NULL, NULL, NULL, NULL, 1, NULL, 3),
(23, NULL, NULL, NULL, NULL, 1, NULL, 3),
(24, NULL, NULL, NULL, NULL, 1, NULL, 3),
(25, NULL, NULL, NULL, NULL, 1, NULL, 3),
(26, NULL, NULL, NULL, NULL, 1, NULL, 3),
(27, NULL, NULL, NULL, NULL, 1, NULL, 3),
(28, NULL, NULL, NULL, NULL, 1, NULL, 3),
(29, NULL, NULL, NULL, NULL, 1, NULL, 3),
(30, NULL, NULL, NULL, NULL, 1, NULL, 3),
(31, NULL, NULL, NULL, NULL, 1, NULL, 3);

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `serviceId` varchar(512) NOT NULL,
  `postedDate` datetime NOT NULL,
  `location` varchar(512) NOT NULL,
  `payment` varchar(512) DEFAULT NULL,
  `promo_code` varchar(512) DEFAULT NULL,
  `status` varchar(512) NOT NULL,
  `userId` varchar(512) NOT NULL,
  `workerId` varchar(512) DEFAULT NULL,
  `faourite_sp` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Language`
--

CREATE TABLE `Language` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `direction` varchar(512) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Language`
--

INSERT INTO `Language` (`id`, `name`, `direction`, `is_active`) VALUES
(1, 'English', 'LTR', 1),
(3, 'Hindi', 'LTR', 1),
(4, 'Arabic', 'RTL', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Question`
--

CREATE TABLE `Question` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `type` int(11) NOT NULL,
  `option` text,
  `serviceId` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `icon` varchar(512) DEFAULT NULL,
  `color` varchar(512) DEFAULT NULL,
  `image` varchar(512) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `range_name` varchar(512) DEFAULT NULL,
  `start_range` int(11) DEFAULT NULL,
  `end_range` int(11) DEFAULT NULL,
  `IncrementId` int(11) DEFAULT NULL,
  `Status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Question`
--

INSERT INTO `Question` (`id`, `name`, `type`, `option`, `serviceId`, `parent_id`, `icon`, `color`, `image`, `is_active`, `range_name`, `start_range`, `end_range`, `IncrementId`, `Status`) VALUES
(39, 'First Number Question', 1, '[]', 3, 0, 'fa fa-home', '#fff', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1521089808205_splashscreen.png', 1, '', 0, 0, 1, 1),
(40, 'First Boolean Question', 2, '[]', 3, 0, 'fa fa-home', '#fff', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1521085947631_swiper-2.png', 1, '', 0, 0, 1, 1),
(41, 'First Radio Question', 3, '[]', 3, 0, 'fa fa-home', '#fff', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1521034385329_icon15.png', 1, '', 0, 0, 1, 1),
(42, 'First Range Question', 4, '[]', 3, 0, 'fa fa-home', '#fff', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1521048598909_logo.png', 1, '2424', 0, 0, 1, 1),
(43, 'First Photo Question', 5, '[]', 3, 0, 'fa fa-home', '#fff', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1521033716723_london.png', 1, '', 0, 0, 1, 1),
(48, 'Second Number Question', 1, '[]', 3, 0, 'fa fa-home', '#fff', 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1521199052442_icon2.png', 1, '', 0, 0, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Role`
--

CREATE TABLE `Role` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `RoleMapping`
--

CREATE TABLE `RoleMapping` (
  `id` int(11) NOT NULL,
  `principalType` varchar(512) DEFAULT NULL,
  `principalId` varchar(255) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `verticalId` int(11) DEFAULT NULL,
  `cost_per_hour` int(11) DEFAULT '0',
  `time_interval` int(11) DEFAULT '0',
  `min_charge` int(11) DEFAULT '0',
  `is_reoccur_able` tinyint(1) DEFAULT '0',
  `execution_method` int(11) DEFAULT NULL,
  `min_no_workers` int(11) DEFAULT NULL,
  `min_no_dedicated_workers` int(11) DEFAULT NULL,
  `icon_class` varchar(512) DEFAULT NULL,
  `color_code` varchar(512) DEFAULT NULL,
  `currencyId` int(11) DEFAULT NULL,
  `banner_image` varchar(512) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `cover_image` varchar(512) DEFAULT NULL,
  `features` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `name`, `verticalId`, `cost_per_hour`, `time_interval`, `min_charge`, `is_reoccur_able`, `execution_method`, `min_no_workers`, `min_no_dedicated_workers`, `icon_class`, `color_code`, `currencyId`, `banner_image`, `is_active`, `cover_image`, `features`) VALUES
(3, 'Cleaning', 1, 55, 66, 66, 0, 1, 66, 56, 'fa-faicon', '#00000', 1, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519730142154_icon11.png', 1, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1520576109316_bg-6.png', '[{"name":"Bedroom & Common Areas","icon":"https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1520950085383_bed.png","desc":"<ul>\\n<li>Text one</li>\\n<li>Second Text</li>\\n</ul>"},{"name":"Bathroom","icon":"https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1520974372916_enrichment-1.jpg","desc":"<ul>\\n<li>Showers and tubs scrubbled</li>\\n<li>Floors cleaned again</li>\\n</ul>"}]'),
(4, 'Handyman', 1, 34, 34, 34, 1, 1, 56, 54, 'fa fa-icon', '000000', 1, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519810926855_icon12.png', NULL, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1520560184464_bg-6.png', NULL),
(5, 'Plumbing', 1, 5, 5, 45, 0, 1, 45, 45, 'fg', '000000', 1, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519792745439_icon13.png', 1, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1520547969600_bg-6.png', NULL),
(6, 'Electrical', 1, 56, 56, 56, 1, 1, 56, 56, '', 'ddd', 3, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519737774528_icon14.png', 1, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1520589923996_bg-6.png', NULL),
(7, 'Air Conditioning', 1, 45, 45, 45, 1, 1, 45, 54, '', 'ddd', 1, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519753841710_icon15.png', 1, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1520557815290_bg-6.png', NULL),
(8, 'Washing', 1, 56, 56, 56, 1, 1, 56, 56, '', 'ddd', 1, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519720976450_icon16.png', 1, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1520524320731_bg-6.png', NULL),
(9, 'dh', 1, 12, 12, 12, 0, 1, 12, 12, 'dfh', 'dfh', 3, NULL, 0, '', '[]');

-- --------------------------------------------------------

--
-- Table structure for table `ServiceQuestionAnswer`
--

CREATE TABLE `ServiceQuestionAnswer` (
  `id` int(11) NOT NULL,
  `answer` varchar(512) DEFAULT NULL,
  `questionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `serviceZone`
--

CREATE TABLE `serviceZone` (
  `id` int(11) NOT NULL,
  `zoneId` int(11) DEFAULT NULL,
  `serviceId` int(11) DEFAULT NULL,
  `cost_per_hour` int(11) DEFAULT '0',
  `time_interval` int(11) DEFAULT '0',
  `min_charge` int(11) DEFAULT '0',
  `is_reoccur_able` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `serviceZone`
--

INSERT INTO `serviceZone` (`id`, `zoneId`, `serviceId`, `cost_per_hour`, `time_interval`, `min_charge`, `is_reoccur_able`) VALUES
(87, 4, 4, 5, 56, 5, 1),
(88, 4, 5, 0, 0, 0, 0),
(89, 4, 6, 0, 0, 0, 0),
(90, 4, 7, 0, 0, 0, 0),
(91, 4, 8, 0, 0, 0, 0),
(92, 4, 9, 0, 0, 0, 0),
(96, 4, 10, 0, 0, 0, 0),
(103, 4, 3, 5, 5, 5, 1),
(104, 5, 3, 0, 0, 0, 0),
(105, 4, 9, 0, 0, 0, 0),
(106, 5, 9, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Seting`
--

CREATE TABLE `Seting` (
  `id` int(11) NOT NULL,
  `site_name` varchar(512) NOT NULL,
  `site_email` varchar(512) DEFAULT NULL,
  `address` varchar(512) DEFAULT NULL,
  `phone` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Seting`
--

INSERT INTO `Seting` (`id`, `site_name`, `site_email`, `address`, `phone`) VALUES
(1, 'Krew', 'www.krew.com', 'kolkata', '321895645');

-- --------------------------------------------------------

--
-- Table structure for table `Setting`
--

CREATE TABLE `Setting` (
  `id` int(11) NOT NULL,
  `site_name` varchar(512) DEFAULT NULL,
  `site_email` varchar(512) DEFAULT NULL,
  `address` varchar(512) DEFAULT NULL,
  `phone` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Setting`
--

INSERT INTO `Setting` (`id`, `site_name`, `site_email`, `address`, `phone`) VALUES
(1, 'Krew', 'www.natitsolved.com', 'kolkata', '98954565');

-- --------------------------------------------------------

--
-- Table structure for table `Skill`
--

CREATE TABLE `Skill` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `testBool`
--

CREATE TABLE `testBool` (
  `id` int(11) NOT NULL,
  `is_active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user-location`
--

CREATE TABLE `user-location` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `villa` varchar(512) NOT NULL,
  `landmark` varchar(512) NOT NULL,
  `latitude` varchar(512) NOT NULL,
  `longitude` varchar(512) NOT NULL,
  `buildingName` varchar(512) NOT NULL,
  `customerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user-location`
--

INSERT INTO `user-location` (`id`, `name`, `villa`, `landmark`, `latitude`, `longitude`, `buildingName`, `customerId`) VALUES
(3, 'Office', 'villa', 'landmark', '22.52', '88.52', 'Office', 19),
(4, 'Home', 'dfgdfg', 'gfg', '23.52', '86.52', 'Home', 19),
(5, 'Test', 'Fmjddjj', 'Fgng gg ', '37.788262201592445', '37.788262201592445', 'Fhjbs', 19),
(6, 'Gtsgj', 'Cfjf', 'Baishnabghata Patuli Twp, Patuli, Kolkata, West Bengal, India', '29.21648549291053', '79.53003147616982', ' Jfh', 19),
(7, 'Dgjdshj', '46', 'Belgachia, Kolkata, West Bengal 700004, India', '22.58084514786593', '88.4806196205318', 'Cnndxbm', 19);

-- --------------------------------------------------------

--
-- Table structure for table `UserCredential`
--

CREATE TABLE `UserCredential` (
  `id` int(11) NOT NULL,
  `provider` varchar(512) DEFAULT NULL,
  `authScheme` varchar(512) DEFAULT NULL,
  `externalId` varchar(512) DEFAULT NULL,
  `profile` text,
  `credentials` text,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `UserIdentity`
--

CREATE TABLE `UserIdentity` (
  `id` int(11) NOT NULL,
  `provider` varchar(512) DEFAULT NULL,
  `authScheme` varchar(512) DEFAULT NULL,
  `externalId` varchar(512) DEFAULT NULL,
  `profile` text,
  `credentials` text,
  `created` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `UserIdentity`
--

INSERT INTO `UserIdentity` (`id`, `provider`, `authScheme`, `externalId`, `profile`, `credentials`, `created`, `userId`, `modified`) VALUES
(1, 'facebook', 'oAuth 2.0', '336313390221313', '{"id":"336313390221313","emails":[{"type":"account","value":"nits.subhankarghosh@gmail.com"}]}', '{"externalId":"336313390221313","accessToken":"EAACdDjSNdZCoBACcAb2eJc6bORoSNhMEHj50t5zUoQh95VO6ilQlKXHGqJX7tKkMhnRCJ7PZCDxLDhaUshpgZAHYb6s2jR7ZAwptdjQI0OKsIahbDsIoRdVZAfVVKExnwtGLicMFZAjYmZCmIoyZC1onvyAgDrfxBaUh0zBEHxrDgrzliEZAFnjQPhpNXnEYV7LEW0ZBB6RiGe5uEwcqCMZCgFNnKhLpdCDmNgZD"}', '2018-02-20 05:46:28', 20, '2018-02-20 14:43:18');

-- --------------------------------------------------------

--
-- Table structure for table `UserTemp`
--

CREATE TABLE `UserTemp` (
  `id` int(11) NOT NULL,
  `otp` int(11) DEFAULT NULL,
  `email` varchar(512) DEFAULT NULL,
  `access_token` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `UserTemp`
--

INSERT INTO `UserTemp` (`id`, `otp`, `email`, `access_token`) VALUES
(1, 1779, 'anup@natitsolved.com', 'MU09aBexHhIvdYxDIf3pnULT6xU3BeECjwoGqhT1gtpYIMuAUJX2ITXFou6Zp1WX'),
(2, 3977, 'nits.anup@gmail.com', '9wJeLKvEQRGnbocj9C4cFyL6BYdfpLtoj0PmUYCE9uKn9nZemj5zrFxEJOBfGVUP'),
(3, 6330, 'nits.anup@gmail.com', 'KpkFD1SjBISFlh4pEaQ6sN1G6VQZMeCBM9qPF0G5geBc4FRzVp67uXea1pKacxM6');

-- --------------------------------------------------------

--
-- Table structure for table `Vertical`
--

CREATE TABLE `Vertical` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Vertical`
--

INSERT INTO `Vertical` (`id`, `name`) VALUES
(1, 'Home'),
(2, 'Pet');

-- --------------------------------------------------------

--
-- Table structure for table `VerticalRegion`
--

CREATE TABLE `VerticalRegion` (
  `id` int(11) NOT NULL,
  `verticalId` int(11) DEFAULT NULL,
  `zoneId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `VerticalRegion`
--

INSERT INTO `VerticalRegion` (`id`, `verticalId`, `zoneId`) VALUES
(1, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Worker`
--

CREATE TABLE `Worker` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `phone` varchar(512) NOT NULL,
  `image` varchar(512) DEFAULT NULL,
  `location` point DEFAULT NULL,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Worker`
--

INSERT INTO `Worker` (`id`, `name`, `phone`, `image`, `location`, `realm`, `username`, `password`, `email`, `emailVerified`, `verificationToken`, `is_active`, `status`) VALUES
(1, 'anup chakraborty', '8788', '', '\0\0\0\0\0\0\05^ºIB6@×£p=\nV@', '', 'anup', '$2a$10$vk11yKVjh01F39KOyEbNE.QD5JiWHHimvPN05MjVAjabVDXxGrKe2', 'anup@natitsolved.com', 0, NULL, NULL, NULL),
(2, 'bikash', '98745612345', 'https://homekrewbooking.s3.amazonaws.com/98340894_.png', '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', '', 'bikash', '$2a$10$LISPs4s.MT05dtx.3ti8tegff11xKN24vdZfgPh2R93vQanqjOb7u', 'nits.bikash@gmail.com', 0, NULL, 1, NULL),
(4, 'Saikat Bala', '1234567890', NULL, NULL, NULL, NULL, '$2a$10$wgG067XwKI0t4zSIdicY5.OQoOlSd1l0iHbtYl9B2L7UNeMV.a0yO', 'saikat@gmail.com', NULL, NULL, NULL, NULL),
(6, 'anup', '145632', NULL, NULL, NULL, NULL, '$2a$10$DqH1qkz.r4voGx3I8ZD1T.xigu/U1iM7mTPd.9ZT8r82fbFMBSu7q', 'nits.anup@gmail.com', NULL, NULL, 1, NULL),
(7, 'Saikat Bala', '078965', NULL, NULL, NULL, NULL, '$2a$10$fylfOnIZPcgh1GF0/Vm/GexVB4SrXZQsdD/QvkaO4HIy3qiy7DglC', 'nits.saikat@gmail.com', NULL, NULL, 1, NULL),
(8, 'Saikat Bala', '43434345778', 'https://homekrewbooking.s3.amazonaws.com/8359266_.png', NULL, NULL, NULL, '$2a$10$KmDakFvmvpq.lMmMzVu31eKO5pNpzsgsqfptFDur/fO2IhUFLxREW', 'saikat@natitsolved.com', NULL, NULL, 1, NULL),
(9, 'T21', '8116218359', NULL, NULL, NULL, NULL, '$2a$10$lCgVSsBjXw2.1AC5RtMJ2.djvuvvZ/C4wss0tknwA7v4LBA/UGcOW', 'abc@natitsolved.com', NULL, NULL, 0, NULL),
(10, 'ravi da', '6521456', 'https://homekrewbooking.s3.amazonaws.com/93328389_.png', NULL, NULL, NULL, '$2a$10$Emx5/snZ.7sh0s76b1GNGeeJ/vTNEB0e//Jnh9ulWGw8hf0M2VFe6', 'nits.ravis@gmail.com', NULL, NULL, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `worker-available-timing`
--

CREATE TABLE `worker-available-timing` (
  `id` int(11) NOT NULL,
  `workerId` int(11) DEFAULT NULL,
  `timings` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `worker-available-timing`
--

INSERT INTO `worker-available-timing` (`id`, `workerId`, `timings`) VALUES
(7, 8, '[{"id":1,"time":"8 am","sun":true,"mon":true,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":2,"time":"9 am","sun":false,"mon":false,"tue":true,"wed":false,"thu":false,"fri":false,"sat":false},{"id":3,"time":"10 am","sun":false,"mon":true,"tue":false,"wed":false,"thu":true,"fri":false,"sat":false},{"id":4,"time":"11 am","sun":true,"mon":false,"tue":false,"wed":false,"thu":true,"fri":false,"sat":false},{"id":5,"time":"12 pm","sun":true,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":6,"time":"1 pm","sun":true,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":7,"time":"2 pm","sun":true,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":8,"time":"3 pm","sun":false,"mon":false,"tue":false,"wed":false,"thu":true,"fri":false,"sat":false},{"id":9,"time":"4 pm","sun":false,"mon":false,"tue":false,"wed":false,"thu":true,"fri":false,"sat":false},{"id":10,"time":"5 pm","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":11,"time":"6 pm","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":12,"time":"7 pm","sun":false,"mon":false,"tue":false,"wed":true,"thu":false,"fri":true,"sat":false},{"id":13,"time":"8 pm","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":14,"time":"9 pm","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":15,"time":"10 pm","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":16,"time":"11 pm","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":17,"time":"12 am","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":18,"time":"1 am","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":19,"time":"2 am","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":20,"time":"3 am","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":21,"time":"4 am","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":22,"time":"5 am","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":23,"time":"6 am","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false},{"id":24,"time":"7 am","sun":false,"mon":false,"tue":false,"wed":false,"thu":false,"fri":false,"sat":false}]');

-- --------------------------------------------------------

--
-- Table structure for table `worker-payment`
--

CREATE TABLE `worker-payment` (
  `id` int(11) NOT NULL,
  `bank_name` varchar(512) NOT NULL,
  `account_number` varchar(512) NOT NULL,
  `account_name` varchar(512) NOT NULL,
  `swift_bic` varchar(512) NOT NULL,
  `iban` varchar(512) DEFAULT NULL,
  `workerId` int(11) DEFAULT NULL,
  `selected` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `worker-payment`
--

INSERT INTO `worker-payment` (`id`, `bank_name`, `account_number`, `account_name`, `swift_bic`, `iban`, `workerId`, `selected`) VALUES
(1, 'axis', '7894561230123456', 'pragati', 'fhdfh', 'gfjghfj', 8, 0),
(2, 'hdfc', '123456789012', 'pragati', 'fhdfh', 'gfjghfj', 8, 0);

-- --------------------------------------------------------

--
-- Table structure for table `WorkerAvailability`
--

CREATE TABLE `WorkerAvailability` (
  `id` int(11) NOT NULL,
  `start_time` int(11) DEFAULT NULL,
  `end_time` int(11) DEFAULT NULL,
  `status` varchar(512) DEFAULT NULL COMMENT 'A = Available,  U = Unavailable',
  `workerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `WorkerLocation`
--

CREATE TABLE `WorkerLocation` (
  `id` int(11) NOT NULL,
  `workerId` int(11) DEFAULT NULL,
  `zoneId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `WorkerLocation`
--

INSERT INTO `WorkerLocation` (`id`, `workerId`, `zoneId`) VALUES
(223, 8, 4),
(224, 8, 5);

-- --------------------------------------------------------

--
-- Table structure for table `WorkerService`
--

CREATE TABLE `WorkerService` (
  `id` int(11) NOT NULL,
  `workerId` int(11) DEFAULT NULL,
  `serviceId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `WorkerSkill`
--

CREATE TABLE `WorkerSkill` (
  `id` int(11) NOT NULL,
  `workerId` int(11) DEFAULT NULL,
  `serviceId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `WorkerSkill`
--

INSERT INTO `WorkerSkill` (`id`, `workerId`, `serviceId`) VALUES
(13, 9, 103),
(19, 8, 103),
(20, 8, 91),
(21, 8, 88),
(22, 8, 87);

-- --------------------------------------------------------

--
-- Table structure for table `WorkerUnavailability`
--

CREATE TABLE `WorkerUnavailability` (
  `id` int(11) NOT NULL,
  `start_time` varchar(512) DEFAULT NULL,
  `end_time` varchar(512) DEFAULT NULL,
  `status` varchar(512) DEFAULT NULL,
  `start_date` varchar(512) DEFAULT NULL,
  `end_date` varchar(512) DEFAULT NULL,
  `workerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `WorkerUnavailability`
--

INSERT INTO `WorkerUnavailability` (`id`, `start_time`, `end_time`, `status`, `start_date`, `end_date`, `workerId`) VALUES
(1, '02:00 AM', '01:00 AM', 'NA', '2018-03-15', '2018-03-16', 6),
(2, NULL, NULL, NULL, NULL, NULL, 6),
(3, NULL, NULL, NULL, NULL, NULL, 6),
(4, '02:00 AM', '01:00 AM', 'NA', '2018-03-22', '2018-03-23', 6);

-- --------------------------------------------------------

--
-- Table structure for table `Zone`
--

CREATE TABLE `Zone` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `fencing` text NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `premium` int(11) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '0',
  `is_sec_pass` tinyint(1) DEFAULT '0',
  `security_pasword` varchar(512) DEFAULT NULL,
  `is_job_accept` tinyint(1) DEFAULT '0',
  `level` int(11) NOT NULL DEFAULT '0',
  `languageId` int(11) DEFAULT '0',
  `currencyId` int(11) DEFAULT '0',
  `zoneId` int(11) DEFAULT '0',
  `banner_image` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Zone`
--

INSERT INTO `Zone` (`id`, `name`, `fencing`, `description`, `premium`, `is_active`, `is_sec_pass`, `security_pasword`, `is_job_accept`, `level`, `languageId`, `currencyId`, `zoneId`, `banner_image`) VALUES
(4, 'new town', '[{"lat":22.882501434370063,"lng":87.0941162109375},{"lat":22.238259929564308,"lng":87.1380615234375},{"lat":22.32467096613321,"lng":89.9945068359375},{"lat":22.72045700902588,"lng":89.9505615234375}]', 'lorem ipsum', 5, 0, 0, '', 1, 5, 1, 1, 0, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519824363730_bg-5.png'),
(5, 'kolkata', '[{"lat":23.019076187293035,"lng":87.20947265625},{"lat":22.2992614997412,"lng":87.1490478515625},{"lat":22.380555501421533,"lng":89.5220947265625},{"lat":22.654571520098997,"lng":88.0609130859375},{"lat":23.12520549860231,"lng":88.341064453125}]', 'kolkata', 5, 1, 0, NULL, 1, 5, 1, 1, 0, 'https://s3.eu-central-1.amazonaws.com/files.homekrew.com/1519875644717_london.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AccessToken`
--
ALTER TABLE `AccessToken`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ACL`
--
ALTER TABLE `ACL`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Answer`
--
ALTER TABLE `Answer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `CMS`
--
ALTER TABLE `CMS`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Currency`
--
ALTER TABLE `Currency`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ExexutionMethod`
--
ALTER TABLE `ExexutionMethod`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Faq`
--
ALTER TABLE `Faq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `IntroSlider`
--
ALTER TABLE `IntroSlider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Job`
--
ALTER TABLE `Job`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Language`
--
ALTER TABLE `Language`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Question`
--
ALTER TABLE `Question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `RoleMapping`
--
ALTER TABLE `RoleMapping`
  ADD PRIMARY KEY (`id`),
  ADD KEY `principalId` (`principalId`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ServiceQuestionAnswer`
--
ALTER TABLE `ServiceQuestionAnswer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `serviceZone`
--
ALTER TABLE `serviceZone`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Seting`
--
ALTER TABLE `Seting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Setting`
--
ALTER TABLE `Setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Skill`
--
ALTER TABLE `Skill`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testBool`
--
ALTER TABLE `testBool`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user-location`
--
ALTER TABLE `user-location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `UserCredential`
--
ALTER TABLE `UserCredential`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `UserIdentity`
--
ALTER TABLE `UserIdentity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `UserTemp`
--
ALTER TABLE `UserTemp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Vertical`
--
ALTER TABLE `Vertical`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `VerticalRegion`
--
ALTER TABLE `VerticalRegion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Worker`
--
ALTER TABLE `Worker`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `worker-available-timing`
--
ALTER TABLE `worker-available-timing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `worker-payment`
--
ALTER TABLE `worker-payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `WorkerAvailability`
--
ALTER TABLE `WorkerAvailability`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `WorkerLocation`
--
ALTER TABLE `WorkerLocation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `WorkerService`
--
ALTER TABLE `WorkerService`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `WorkerSkill`
--
ALTER TABLE `WorkerSkill`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `WorkerUnavailability`
--
ALTER TABLE `WorkerUnavailability`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Zone`
--
ALTER TABLE `Zone`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ACL`
--
ALTER TABLE `ACL`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Admin`
--
ALTER TABLE `Admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Answer`
--
ALTER TABLE `Answer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `CMS`
--
ALTER TABLE `CMS`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `Currency`
--
ALTER TABLE `Currency`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `Customer`
--
ALTER TABLE `Customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `ExexutionMethod`
--
ALTER TABLE `ExexutionMethod`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `Faq`
--
ALTER TABLE `Faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `IntroSlider`
--
ALTER TABLE `IntroSlider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `Job`
--
ALTER TABLE `Job`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Language`
--
ALTER TABLE `Language`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `Question`
--
ALTER TABLE `Question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `Role`
--
ALTER TABLE `Role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `RoleMapping`
--
ALTER TABLE `RoleMapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `ServiceQuestionAnswer`
--
ALTER TABLE `ServiceQuestionAnswer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `serviceZone`
--
ALTER TABLE `serviceZone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;
--
-- AUTO_INCREMENT for table `Seting`
--
ALTER TABLE `Seting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Setting`
--
ALTER TABLE `Setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Skill`
--
ALTER TABLE `Skill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `testBool`
--
ALTER TABLE `testBool`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user-location`
--
ALTER TABLE `user-location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `UserCredential`
--
ALTER TABLE `UserCredential`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `UserIdentity`
--
ALTER TABLE `UserIdentity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `UserTemp`
--
ALTER TABLE `UserTemp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `Vertical`
--
ALTER TABLE `Vertical`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `VerticalRegion`
--
ALTER TABLE `VerticalRegion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Worker`
--
ALTER TABLE `Worker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `worker-available-timing`
--
ALTER TABLE `worker-available-timing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `worker-payment`
--
ALTER TABLE `worker-payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `WorkerAvailability`
--
ALTER TABLE `WorkerAvailability`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `WorkerLocation`
--
ALTER TABLE `WorkerLocation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=225;
--
-- AUTO_INCREMENT for table `WorkerService`
--
ALTER TABLE `WorkerService`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `WorkerSkill`
--
ALTER TABLE `WorkerSkill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `WorkerUnavailability`
--
ALTER TABLE `WorkerUnavailability`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `Zone`
--
ALTER TABLE `Zone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
