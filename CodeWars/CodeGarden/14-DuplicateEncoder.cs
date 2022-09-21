using System.Linq;
using System.Collections.Generic;
using System.Text;

public class Kata
{
  public static string DuplicateEncode(string word)
        {
            var disct = word.ToUpper().Distinct();
            Dictionary<char, int> counts = new Dictionary<char, int>();

            foreach(var c in word.ToUpper())
            {
                if (counts.ContainsKey(c))
                    counts[c]++;
                else
                    counts.Add(c, 1);
            }

            StringBuilder builder = new StringBuilder();
            foreach(var c in word.ToUpper())
            {
                if (counts[c] == 1)
                    builder.Append('(');
                else
                    builder.Append(')');
            }

            return builder.ToString();
        }
}